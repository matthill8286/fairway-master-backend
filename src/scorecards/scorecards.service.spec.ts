import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { ScorecardsService } from './scorecards.service';
import { Scorecard } from './interfaces/scorecard.interface';

const mockCat = {
  name: 'Scorecard #1',
  breed: 'Breed #1',
  age: 4,
};

const scorecardsArray = [
  {
    name: 'Scorecard #1',
    breed: 'Breed #1',
    age: 4,
  },
  {
    name: 'Scorecard #2',
    breed: 'Breed #2',
    age: 2,
  },
];

describe('CatService', () => {
  let service: ScorecardsService;
  let model: Model<Scorecard>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScorecardsService,
        {
          provide: 'SCORECARD_MODEL',
          useValue: {
            new: jest.fn().mockResolvedValue(mockCat),
            constructor: jest.fn().mockResolvedValue(mockCat),
            find: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get(ScorecardsService);
    model = module.get<Model<Scorecard>>('CAT_MODEL');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all scorecards', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(scorecardsArray),
    } as any);
    const scorecards = await service.findAll();
    expect(scorecards).toEqual(scorecardsArray);
  });

  it('should insert a new cat', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        name: 'Scorecard #1',
        breed: 'Breed #1',
        age: 4,
      } as any),
    );
    const newCat = await service.create({
      name: 'Scorecard #1',
      breed: 'Breed #1',
      age: 4,
    });
    expect(newCat).toEqual(mockCat);
  });
});
