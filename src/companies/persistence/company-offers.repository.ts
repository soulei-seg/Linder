import {Injectable} from '@nestjs/common';
import {CompanyDao} from "./dao/company.dao";
import axios from "axios"
import {CompanyOfferDao} from "./dao/company-offer.dao";
import {ProfileDao} from "../../profiles/persistence/dao/profile.dao";

@Injectable()
export class CompanyOffersRepository {
    BASE_URL: string = "http://localhost:3000/offers";
    PROFILE_URL: string = "http://localhost:3000/profiles";

    async create(companyOfferDao: CompanyOfferDao): Promise<number> {
        return (await axios.post(this.BASE_URL, companyOfferDao)).data;
    }

    findAll() {
        return ;
    }

    async findPotentialProfiles(offerId : number): Promise<ProfileDao[]>{
        return (await axios.get(this.PROFILE_URL + offerId)).data;

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
