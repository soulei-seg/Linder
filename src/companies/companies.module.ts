import {Module} from '@nestjs/common';
import {CompaniesService} from './application/companies.service';
import {CompaniesController} from './presentation/companies.controller';
import {CompaniesRepository} from "./persistence/companies.repository";

@Module({
    controllers: [CompaniesController],
    providers: [CompaniesService, CompaniesRepository]
})
export class CompaniesModule {
}
