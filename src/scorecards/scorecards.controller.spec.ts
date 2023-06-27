import { Test, TestingModule } from '@nestjs/testing';
import { ScorecardsController } from './scorecards.controller';
import { CreateScorecardDto } from './dto/create-scorecard.dto';
import { ScorecardsService } from './scorecards.service';

describe('ScorecardsController', () => {
  let controller: ScorecardsController;
  let service: ScorecardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScorecardsController],
      providers: [
        {
          provide: ScorecardsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Scorecard #1',
                breed: 'Bread #1',
                age: 4,
              },
              {
                name: 'Scorecard #2',
                breed: 'Breed #2',
                age: 3,
              },
              {
                name: 'Scorecard #3',
                breed: 'Breed #3',
                age: 2,
              },
            ]),
            create: jest
              .fn()
              .mockImplementation((createScorecardDto: CreateScorecardDto) =>
                Promise.resolve({ _id: '1', ...createScorecardDto }),
              ),
          },
        },
      ],
    }).compile();

    controller = module.get(ScorecardsController);
    service = module.get(ScorecardsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create a new cat', async () => {
      const createScorecardDto: CreateScorecardDto = {
        name: 'Scorecard #1',
        breed: 'Breed #1',
        age: 4,
      };

      expect(controller.create(createScorecardDto)).resolves.toEqual({
        _id: '1',
        ...createScorecardDto,
      });
    });
  });

  describe('findAll()', () => {
    it('should get an array of scorecards', () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Scorecard #1',
          breed: 'Bread #1',
          age: 4,
        },
        {
          name: 'Scorecard #2',
          breed: 'Breed #2',
          age: 3,
        },
        {
          name: 'Scorecard #3',
          breed: 'Breed #3',
          age: 2,
        },
      ]);
    });
  });
});
