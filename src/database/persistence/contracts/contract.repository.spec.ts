import {Test, TestingModule} from '@nestjs/testing';
import {ContractRepository} from './contract.repository';

describe('ContractRepository', () => {
    let repository: ContractRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ContractRepository],
        }).compile();

        repository = module.get<ContractRepository>(ContractRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
