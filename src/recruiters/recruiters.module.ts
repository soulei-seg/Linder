import {Module} from '@nestjs/common';
import {RecruitersService} from './application/recruiters.service';
import {RecruitersController} from './presentation/recruiters.controller';
import {RecruitersRepository} from "./persistence/recruiters.repository";

@Module({
    controllers: [RecruitersController],
    providers: [RecruitersService, RecruitersRepository]
})
export class RecruitersModule {
}
