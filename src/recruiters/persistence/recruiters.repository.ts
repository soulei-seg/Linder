import {Injectable} from '@nestjs/common';
import {RecruiterDao} from "./dao/recruiter.dao";

@Injectable()
export class RecruitersRepository {
    create(recruiter: RecruiterDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, recruiter: RecruiterDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
