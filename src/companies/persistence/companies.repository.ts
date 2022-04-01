import {Injectable} from '@nestjs/common';
import {CompanyDao} from "./dao/company.dao";
import axios from "axios"

@Injectable()
export class CompaniesRepository {
    BASE_URL: string = "http://localhost:3000/databases/companies";

    async create(company: CompanyDao): Promise<number> {
        const companyDao: CompanyDao = (await axios.post(this.BASE_URL, company)).data;
        return companyDao.id
    }

    async findAll(): Promise<CompanyDao[]> {
        return (await axios.get(this.BASE_URL)).data;
    }

    findOne(id: number) {
        return;
    }

    update(id: number, company: CompanyDao) {
        return;
    }

    remove(id: number) {
        return;
    }
}
