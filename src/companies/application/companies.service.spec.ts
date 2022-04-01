import {Test, TestingModule} from '@nestjs/testing';
import {CompaniesService} from './companies.service';
import {CompaniesModule} from "../companies.module";
import {CompaniesRepository} from "../persistence/companies.repository";
import {Company} from "./model/company.model";
import {CompanySirenAlreadyExistException} from "../../exceptions/companies-exceptions";

describe('CompaniesService', () => {
    let service: CompaniesService;
    let repository: CompaniesRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CompaniesModule],
        }).compile();

        service = module.get<CompaniesService>(CompaniesService);
        repository = module.get<CompaniesRepository>(CompaniesRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a company, call the repository and return the new id', async () => {
        jest.spyOn(repository, 'findAll').mockImplementation(() => Promise.resolve([]));
        jest.spyOn(repository, 'create').mockImplementation(() => Promise.resolve(1));
        const company: Company = new Company();

        const id: number = await service.create(company);

        expect(id).toEqual(1);
        expect(repository.create).toHaveBeenCalledTimes(1);
        expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    it('should not create a company if the siren is not unique', async () => {
        const companyInDatabase: Company = new Company();
        companyInDatabase.siren = 123456789
        jest.spyOn(repository, 'findAll').mockImplementation(() => Promise.resolve([companyInDatabase]));
        jest.spyOn(repository, 'create').mockImplementation(() => Promise.resolve(1));
        const company: Company = new Company();
        company.siren = 123456789

        await expect(service.create(company)).rejects.toThrow(CompanySirenAlreadyExistException);

        expect(repository.create).toHaveBeenCalledTimes(0);
        expect(repository.findAll).toHaveBeenCalledTimes(1);
    });
});
