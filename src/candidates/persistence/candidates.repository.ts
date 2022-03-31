import {Injectable} from '@nestjs/common';
import {CandidateDao} from "./dao/candidate.dao";

@Injectable()
export class CandidatesRepository {
    create(candidate: CandidateDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, candidate: CandidateDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
