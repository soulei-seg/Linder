import {Test, TestingModule} from '@nestjs/testing';
import {SkillsRepository} from './skills.repository';

describe('SkillsRepository', () => {
    let repository: SkillsRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SkillsRepository],
        }).compile();

        repository = module.get<SkillsRepository>(SkillsRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
