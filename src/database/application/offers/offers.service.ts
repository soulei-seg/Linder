import {Injectable} from '@nestjs/common';
import {OffersRepository} from "../../persistence/offers/offers.repository";
import {Offer} from "./model/offer.model";
import {OfferDao} from "../../persistence/offers/dao/offer.dao";

@Injectable()
export class OffersService {
    constructor(private readonly offersRepository: OffersRepository) {
    }

    public async create(offer: Offer): Promise<Offer> {
        return await this.offersRepository.create(offer)
    }

    public async findAll(): Promise<Offer[]> {
        return await this.offersRepository.findAll()
    }

    public async findOne(id: number): Promise<Offer> {
        return await this.offersRepository.findOne(id)
    }

    public async update(id: number, offer: Offer): Promise<void> {
        return ;
    }

    public async remove(id: number): Promise<void> {
        await this.offersRepository.remove(id)
    }

    private static mapDaoToModel(databaseDao: OfferDao): Offer {
        return new Offer();
    }

    private static mapModelToDao(database: Offer): OfferDao {
        return new OfferDao();
    }
}
