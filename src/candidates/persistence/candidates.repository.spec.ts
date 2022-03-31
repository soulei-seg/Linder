import {Test, TestingModule} from '@nestjs/testing';
import {CandidatesRepository} from './candidates.repository';

describe('CandidatesRepository', () => {
    let repository: CandidatesRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CandidatesRepository],
        }).compile();

        repository = module.get<CandidatesRepository>(CandidatesRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
