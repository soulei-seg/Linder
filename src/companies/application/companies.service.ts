import {Injectable} from '@nestjs/common';
import { CompaniesRepository } from '../persistence/companies.repository';
import {CompanyDao} from "../persistence/dao/company.dao";
import {Company} from "./model/company.model";

@Injectable()
export class CompaniesService {
    constructor(private readonly companiesRepository: CompaniesRepository) {
    }

    async create(company: Company): Promise<number> {
        const companyId: number = await this.companiesRepository.create(this.mapModelToDao(company))
        return companyId;
    }

    findAll() {
        return ;
    }

    findOne(id: number) {
        return ;
    }

    update(id: number, company: Company) {
        return ;
    }

    remove(id: number) {
        return ;
    }

    private mapDaoToModel(companyDao: CompanyDao): Company {
        const company = new Company();
        company.id = companyDao.id;
        company.name = companyDao.name;
        company.date = companyDao.date;
        company.logo = companyDao.logo;
        company.siren = companyDao.siren;
        company.description = companyDao.description;
        return company;
    }

    private mapModelToDao(company: Company): CompanyDao {
        const companyDao = new CompanyDao();
        companyDao.id = company.id;
        companyDao.name = company.name;
        companyDao.date = company.date;
        companyDao.logo = company.logo;
        companyDao.siren = company.siren;
        companyDao.description = company.description;
        return companyDao;
    }
}
