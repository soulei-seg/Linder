import {Injectable} from '@nestjs/common';
import {OfferDao, OfferToAddDao, OfferToUpdateDao} from "./dao/offer.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class OffersRepository {
    constructor(
        @InjectRepository(OfferDao)
        private database: Repository<OfferDao>
    ) {
    }

    public async create(offerDao: OfferToAddDao): Promise<OfferDao> {
        return await this.database.save(offerDao);
    }

    public async findAll(): Promise<OfferDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<OfferDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, offerDao: OfferToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(id), offerDao)
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
