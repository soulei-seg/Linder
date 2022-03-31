import {Test, TestingModule} from '@nestjs/testing';
import {SkillsController} from './skills.controller';
import {SkillsService} from '../application/skills.service';
import {SkillsRepository} from '../persistence/skills.repository';

describe('SkillsController', () => {
    let controller: SkillsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SkillsController],
            providers: [SkillsService, SkillsRepository],
        }).compile();

        controller = module.get<SkillsController>(SkillsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
