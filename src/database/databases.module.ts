import {Module} from '@nestjs/common';
import {OffersModule} from "./offers.module";
import {ProfilesModule} from "./profiles.module";
import {ContractsModule} from "./contracts.module";
import {CompaniesModule} from "./companies.module";
import {MatchesModule} from "./matches.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {OfferDao} from "./persistence/offers/dao/offer.dao";
import {ProfileDao} from "./persistence/profiles/dao/profile.dao";
import {CompanyDao} from "./persistence/companies/dao/company.dao";
import {ContractDao} from "./persistence/contracts/dao/contract.dao";
import {MatchDao} from "./persistence/matches/dao/match.dao";
import {FinanceDao} from "./persistence/finances/dao/finance.dao";

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'cours-architecture-db.florianlafuente.com',
        port: 12345,
        username: 'admin',
        password: 'Passw0rd',
        database: 'linder',
        entities: [OfferDao, ProfileDao, CompanyDao, ContractDao, MatchDao, FinanceDao],
        synchronize: true,
    }),
        OffersModule, ProfilesModule, ContractsModule, CompaniesModule, MatchesModule]
})
export class DatabasesModule {
}
