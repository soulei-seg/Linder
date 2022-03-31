import {Module} from '@nestjs/common';
import {SkillsService} from './application/skills.service';
import {SkillsController} from './presentation/skills.controller';
import {SkillsRepository} from "./persistence/skills.repository";

@Module({
    controllers: [SkillsController],
    providers: [SkillsService, SkillsRepository]
})
export class SkillsModule {
}
