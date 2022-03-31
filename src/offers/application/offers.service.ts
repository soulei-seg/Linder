import {Injectable} from '@nestjs/common';
import {OfferDao} from "../persistence/dao/offer.dao";
import { OffersRepository } from '../persistence/offers.repository';
import {Offer} from "./model/offer.model";

@Injectable()
export class OffersService {
    constructor(private readonly offersRepository: OffersRepository) {
    }

    create(offer: Offer) {
        return this.offersRepository.create(offer)
    }

    findAll() {
        return this.offersRepository.findAll()
    }

    findOne(id: number) {
        return this.offersRepository.findOne(id)
    }

    update(id: number, offer: Offer) {
        return this.offersRepository.update(id, offer)
    }

    remove(id: number) {
        return this.offersRepository.remove(id)
    }

    private mapDaoToModel(offerDao: OfferDao): Offer {
        const offer = new Offer();
        return offer;
    }

    private mapModelToDao(offer: Offer): OfferDao {
        const offerDao = new OfferDao();
        return offerDao;
    }
}
