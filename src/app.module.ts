import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabasesModule} from "./database/databases.module";
import {CandidatesModule} from "./candidates/candidates.module";
import {CompaniesModule} from "./companies/companies.module";
import {ContractsModule} from "./contracts/contracts.module";
import {MatchsModule} from "./matchs/matchs.module";
import {OffersModule} from "./offers/offers.module";
import {ProfilesModule} from "./profiles/profiles.module";
import {RecruitersModule} from "./recruiters/recruiters.module";
import {SkillsModule} from "./skills/skills.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [DatabasesModule,
        CandidatesModule,
        CompaniesModule,
        ContractsModule,
        MatchsModule,
        OffersModule,
        ProfilesModule,
        RecruitersModule,
        SkillsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'cours-architecture-db.florianlafuente.com',
            port: 12345,
            username: 'admin',
            password: 'Passw0rd',
            database: 'test',
            entities: [],
            synchronize: true,
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
