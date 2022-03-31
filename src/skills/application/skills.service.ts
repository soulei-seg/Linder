import {Injectable} from '@nestjs/common';
import {SkillDao} from "../persistence/dao/skill.dao";
import {Skill} from "./model/skill.model";

@Injectable()
export class SkillsService {
    constructor(private readonly skillsRepository: SkillsRepository) {
    }

    create(skill: Skill) {
        return this.skillsRepository.create(skill)
    }

    findAll() {
        return this.skillsRepository.findAll()
    }

    findOne(id: number) {
        return this.skillsRepository.findOne(id)
    }

    update(id: number, skill: Skill) {
        return this.skillsRepository.update(id, skill)
    }

    remove(id: number) {
        return this.skillsRepository.remove(id)
    }

    private mapDaoToModel(skillDao: SkillDao): Skill {
        const skill = new Skill();
        return skill;
    }

    private mapModelToDao(skill: Skill): SkillDao {
        const skillDao = new SkillDao();
        return skillDao;
    }
}
