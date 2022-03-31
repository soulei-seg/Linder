import {Module} from '@nestjs/common';
import {MatchsService} from './application/matchs.service';
import {MatchsController} from './presentation/matchs.controller';
import {MatchsRepository} from "./persistence/matchs.repository";

@Module({
    controllers: [MatchsController],
    providers: [MatchsService, MatchsRepository]
})
export class MatchsModule {
}
