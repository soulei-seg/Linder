import {Module} from '@nestjs/common';
import {OffersController} from "./presentation/offers/offers.controller";
import {OffersService} from "./application/offers/offers.service";
import {OffersRepository} from "./persistence/offers/offers.repository";
import {OfferDao, OfferToAddDao, OfferToUpdateDao} from "./persistence/offers/dao/offer.dao";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([OfferDao, OfferToAddDao])],
    controllers: [OffersController],
    providers: [OffersService, OffersRepository, OfferToUpdateDao]
})
export class OffersModule {
}
