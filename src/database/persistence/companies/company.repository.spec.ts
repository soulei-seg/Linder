import {Test, TestingModule} from '@nestjs/testing';
import {CompanyRepository} from './company.repository';

describe('CompanyRepository', () => {
    let repository: CompanyRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CompanyRepository],
        }).compile();

        repository = module.get<CompanyRepository>(CompanyRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
