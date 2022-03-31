import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MatchDao} from "./persistence/matches/dao/match.dao";

@Module({
    imports: [TypeOrmModule.forFeature([MatchDao])],
    controllers: [],
    providers: []
})
export class MatchesModule {
}
