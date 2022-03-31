import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CompanyDao} from "./persistence/companies/dao/company.dao";

@Module({
    imports: [TypeOrmModule.forFeature([CompanyDao])],
    controllers: [],
    providers: []
})
export class CompaniesModule {
}
