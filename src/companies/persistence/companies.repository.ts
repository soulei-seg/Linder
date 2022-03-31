import {Injectable} from '@nestjs/common';
import {CompanyDao} from "./dao/company.dao";

@Injectable()
export class CompaniesRepository {
    create(company: CompanyDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, company: CompanyDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
