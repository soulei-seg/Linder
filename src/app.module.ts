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

@Module({
    imports: [DatabasesModule,
        CandidatesModule,
        CompaniesModule,
        ContractsModule,
        MatchsModule,
        OffersModule,
        ProfilesModule,
        RecruitersModule,
        SkillsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
