import {Injectable} from '@nestjs/common';
import {OfferDao} from "../persistence/dao/offer.dao";
import { OffersRepository } from '../persistence/offers.repository';
import {Offer} from "./model/offer.model";

@Injectable()
export class OffersService {
    constructor(private readonly offersRepository: OffersRepository) {
    }

    async create(offer: Offer): Promise<number> {
        const offerId: number = await this.offersRepository.create(this.mapModelToDao(offer));
        return offerId;
    }

    findAll() {
        return ;
    }

    findOne(id: number) {
        return ;
    }

    update(id: number, offer: Offer) {
        return ;
    }

    remove(id: number) {
        return ;
    }

    private mapDaoToModel(offerDao: OfferDao): Offer {
        const offer = new Offer();
        return offer;
    }

    private mapModelToDao(offer: Offer): OfferDao {
        const offerDao = new OfferDao();
        offerDao.description = offer.description;
        offerDao.key_words = offer.key_words;
        offerDao.salary = offer.salary;
        offerDao.type = offer.type;
        offerDao.status = offer.status;
        offerDao.open_to_recruiters = offer.open_to_recruiters;
        offerDao.companyId = offer.companyId;
        return offerDao;
    }
}
