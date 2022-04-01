import {Injectable} from '@nestjs/common';
import {Company} from "./model/company.model";
import {CompanyRepository} from "../../persistence/companies/company.repository";
import {CompanyDao} from "../../persistence/companies/dao/company.dao";

@Injectable()
export class CompaniesService {
    constructor(private readonly companiesRepository: CompanyRepository) {
    }

    public async create(company: Company): Promise<Company> {
        const companyDao: CompanyDao = await this.companiesRepository.create(this.mapModelToDao(company))
        return this.mapDaoToModel(companyDao);
    }

    public async findAll(): Promise<Company[]> {
        return await this.companiesRepository.findAll()
    }

    public async findOne(id: number): Promise<Company> {
        return await this.companiesRepository.findOne(id)
    }

    public async update(id: number, company: Company): Promise<Company> {
        const companyDao: CompanyDao = await this.companiesRepository.update(id, this.mapModelToDao(company))
        return this.mapDaoToModel(companyDao);
    }

    public async remove(id: number): Promise<void> {
        await this.companiesRepository.remove(id)
    }

    private mapDaoToModel(companyDao: CompanyDao): Company {
        const company: Company = new Company();
        company.id = companyDao.id;
        company.name = companyDao.name;
        company.date = companyDao.date;
        company.logo = companyDao.logo;
        company.siren = companyDao.siren;
        company.description = companyDao.description;
        return company;
    }

    private mapModelToDao(company: Company): CompanyDao {
        const companyDao: CompanyDao = new CompanyDao();
        companyDao.id = company.id;
        companyDao.name = company.name;
        companyDao.date = company.date;
        companyDao.logo = company.logo;
        companyDao.siren = company.siren;
        companyDao.description = company.description;
        return companyDao;
    }
}
