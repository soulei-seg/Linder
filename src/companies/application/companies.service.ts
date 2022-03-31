import {Injectable} from '@nestjs/common';
import {CompanyDao} from "../persistence/dao/company.dao";
import {Company} from "./model/company.model";

@Injectable()
export class CompaniesService {
    constructor(private readonly companiesRepository: CompaniesRepository) {
    }

    create(company: Company) {
        return this.companiesRepository.create(company)
    }

    findAll() {
        return this.companiesRepository.findAll()
    }

    findOne(id: number) {
        return this.companiesRepository.findOne(id)
    }

    update(id: number, company: Company) {
        return this.companiesRepository.update(id, company)
    }

    remove(id: number) {
        return this.companiesRepository.remove(id)
    }

    private mapDaoToModel(companyDao: CompanyDao): Company {
        const company = new Company();
        return company;
    }

    private mapModelToDao(company: Company): CompanyDao {
        const companyDao = new CompanyDao();
        return companyDao;
    }
}
