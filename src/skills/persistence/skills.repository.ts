import {Injectable} from '@nestjs/common';
import {SkillDao} from "./dao/skill.dao";

@Injectable()
export class SkillsRepository {
    create(skill: SkillDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, skill: SkillDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
