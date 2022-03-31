import {Injectable} from '@nestjs/common';
import {RecruiterDao} from "../persistence/dao/recruiter.dao";
import { RecruitersRepository } from '../persistence/recruiters.repository';
import {Recruiter} from "./model/recruiter.model";

@Injectable()
export class RecruitersService {
    constructor(private readonly recruitersRepository: RecruitersRepository) {
    }

    create(recruiter: Recruiter) {
        return this.recruitersRepository.create(recruiter)
    }

    findAll() {
        return this.recruitersRepository.findAll()
    }

    findOne(id: number) {
        return this.recruitersRepository.findOne(id)
    }

    update(id: number, recruiter: Recruiter) {
        return this.recruitersRepository.update(id, recruiter)
    }

    remove(id: number) {
        return this.recruitersRepository.remove(id)
    }

    private mapDaoToModel(recruiterDao: RecruiterDao): Recruiter {
        const recruiter = new Recruiter();
        return recruiter;
    }

    private mapModelToDao(recruiter: Recruiter): RecruiterDao {
        const recruiterDao = new RecruiterDao();
        return recruiterDao;
    }
}
