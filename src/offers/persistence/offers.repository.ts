import {Injectable} from '@nestjs/common';
import {OfferDao} from "./dao/offer.dao";

@Injectable()
export class OffersRepository {
    create(offer: OfferDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, offer: OfferDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
