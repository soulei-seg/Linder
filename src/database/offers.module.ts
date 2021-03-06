import {Module} from '@nestjs/common';
import {OffersController} from "./presentation/offers/offers.controller";
import {OffersService} from "./application/offers/offers.service";
import {OffersRepository} from "./persistence/offers/offers.repository";
import {OfferDao, OfferToUpdateDao} from "./persistence/offers/dao/offer.dao";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CompaniesModule} from "./companies.module";

@Module({
    imports: [TypeOrmModule.forFeature([OfferDao]), CompaniesModule],
    controllers: [OffersController],
    providers: [OffersService, OffersRepository, OfferToUpdateDao]
})
export class OffersModule {
}
