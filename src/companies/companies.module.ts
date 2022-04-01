import {Module} from '@nestjs/common';
import {CompaniesService} from './application/companies.service';
import {CompaniesController} from './presentation/companies.controller';
import {CompaniesRepository} from "./persistence/companies.repository";
import {CompaniesOfferController} from "./presentation/companies-offer.controller";
import {CompanyOffersRepository} from "./persistence/company-offers.repository";

@Module({
    controllers: [CompaniesController, CompaniesOfferController],
    providers: [CompaniesService, CompaniesRepository, CompanyOffersRepository]
})
export class CompaniesModule {
}
