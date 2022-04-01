import {Injectable} from '@nestjs/common';
import {OfferDao} from "./dao/offer.dao";
import axios from "axios";

@Injectable()
export class OffersRepository {
    BASE_URL: string = "http://localhost:3000/databases/offers";

    async create(offer: OfferDao) {
        const offerDao: OfferDao = (await axios.post(this.BASE_URL, offer)).data;
        return offerDao.id
    }

    findAll() {
        return ;
    }

    findOne(id: number) {
        return ;
    }

    update(id: number, company: OfferDao) {
        return ;
    }

    remove(id: number) {
        return ;
    }
}
