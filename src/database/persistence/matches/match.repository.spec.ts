import {Test, TestingModule} from '@nestjs/testing';
import {MatchRepository} from './match.repository';

describe('MatchRepository', () => {
    let repository: MatchRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MatchRepository],
        }).compile();

        repository = module.get<MatchRepository>(MatchRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
