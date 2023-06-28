import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { promises as fs } from 'fs';
import { ImageAnnotatorClient } from '@google-cloud/vision';

@Injectable()
export class ImageProcessingService {
  private client: ImageAnnotatorClient;

  constructor() {
    this.client = new ImageAnnotatorClient();
  }

  async processScorecard(
    imagePath: string,
  ): Promise<{ hole: string; score: string; text: string }> {
    let image: Buffer;
    try {
      // Load the image file
      image = await fs.readFile(imagePath);
    } catch (err) {
      throw new HttpException(
        `Unable to read image from path: ${imagePath}. Error: ${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    let result;
    try {
      // Use Google's Cloud Vision API to detect text within the image
      [result] = await this.client.textDetection(image);
    } catch (err) {
      throw new HttpException(
        `Unable to process image using Google Cloud Vision API. Error: ${err.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const detections = result.textAnnotations;

    // Assuming the first detection contains all the text found
    const text = detections[0].description;

    // Check if any detected text block contains the word 'Scorecard', 'Hole' or 'Score'
    const holeDetection = detections.find((det) =>
      det.description.includes('Hole'),
    );
    const scoreDetection = detections.find((det) =>
      det.description.includes('Score'),
    );

    if (!holeDetection) {
      throw new HttpException(
        'Unable to find hole information in the image',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!scoreDetection) {
      throw new HttpException(
        'Unable to find score information in the image',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Extract hole and score information
    const hole = holeDetection.description.split(': ')[1];
    const score = scoreDetection.description.split(': ')[1];

    return { hole, score, text };
  }
}
