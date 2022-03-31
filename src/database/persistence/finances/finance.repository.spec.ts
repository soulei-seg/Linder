import {Test, TestingModule} from '@nestjs/testing';
import {FinanceRepository} from './finance.repository';

describe('FinanceRepository', () => {
    let repository: FinanceRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FinanceRepository],
        }).compile();

        repository = module.get<FinanceRepository>(FinanceRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
