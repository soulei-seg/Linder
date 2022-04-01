import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CompanyDao} from "./persistence/companies/dao/company.dao";
import {CompaniesController} from "./presentation/companies/companies.controller";
import {CompaniesService} from "./application/companies/companies.service";
import {CompanyRepository} from "./persistence/companies/company.repository";

@Module({
    imports: [TypeOrmModule.forFeature([CompanyDao])],
    controllers: [CompaniesController],
    providers: [CompaniesService, CompanyRepository]
})
export class CompaniesModule {
}
