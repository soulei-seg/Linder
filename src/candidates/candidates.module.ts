import {Module} from '@nestjs/common';
import {CandidatesService} from './application/candidates.service';
import {CandidatesController} from './presentation/candidates.controller';
import {CandidatesRepository} from "./persistence/candidates.repository";

@Module({
    controllers: [CandidatesController],
    providers: [CandidatesService, CandidatesRepository]
})
export class CandidatesModule {
}
