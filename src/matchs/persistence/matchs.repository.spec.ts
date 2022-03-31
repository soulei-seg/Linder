import {Test, TestingModule} from '@nestjs/testing';
import {MatchsRepository} from './matchs.repository';

describe('MatchsRepository', () => {
    let repository: MatchsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MatchsRepository],
        }).compile();

        repository = module.get<MatchsRepository>(MatchsRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
