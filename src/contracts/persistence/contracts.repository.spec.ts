import {Test, TestingModule} from '@nestjs/testing';
import {ContractsRepository} from './contracts.repository';

describe('ContractsRepository', () => {
    let repository: ContractsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ContractsRepository],
        }).compile();

        repository = module.get<ContractsRepository>(ContractsRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
