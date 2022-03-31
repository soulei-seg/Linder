import {Injectable} from '@nestjs/common';
import {CandidateDao} from "../persistence/dao/candidate.dao";
import {Candidate} from "./model/candidate.model";

@Injectable()
export class CandidatesService {
    constructor(private readonly candidatesRepository: CandidatesRepository) {
    }

    create(candidate: Candidate) {
        return this.candidatesRepository.create(candidate)
    }

    findAll() {
        return this.candidatesRepository.findAll()
    }

    findOne(id: number) {
        return this.candidatesRepository.findOne(id)
    }

    update(id: number, candidate: Candidate) {
        return this.candidatesRepository.update(id, candidate)
    }

    remove(id: number) {
        return this.candidatesRepository.remove(id)
    }

    private mapDaoToModel(candidateDao: CandidateDao): Candidate {
        const candidate = new Candidate();
        return candidate;
    }

    private mapModelToDao(candidate: Candidate): CandidateDao {
        const candidateDao = new CandidateDao();
        return candidateDao;
    }
}
