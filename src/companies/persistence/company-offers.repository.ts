import {Injectable} from '@nestjs/common';
import {CompanyDao} from "./dao/company.dao";
import axios from "axios"
import {CompanyOfferDao} from "./dao/company-offer.dao";

@Injectable()
export class CompanyOffersRepository {
    BASE_URL: string = "http://localhost:3000/offers";

    async create(companyOfferDao: CompanyOfferDao): Promise<number> {
        return await (await axios.post(this.BASE_URL, companyOfferDao)).data;
    }

    findAll() {
        return ;
    }

    findOne(id: number) {
        return ;
    }

    update(id: number, company: CompanyDao) {
        return ;
    }

    remove(id: number) {
        return ;
    }
}
