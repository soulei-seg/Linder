import {Test, TestingModule} from '@nestjs/testing';
import {CompaniesRepository} from './companies.repository';

describe('CompaniesRepository', () => {
    let repository: CompaniesRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CompaniesRepository],
        }).compile();

        repository = module.get<CompaniesRepository>(CompaniesRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
