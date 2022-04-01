import {Injectable} from '@nestjs/common';
import { CandidatesRepository } from '../persistence/candidates.repository';
import {CandidateDao} from "../persistence/dao/candidate.dao";
import {Candidate} from "./model/candidate.model";
import {CandidateEmailAlreadyExistsException} from "../../exceptions/candidates-exceptions";

@Injectable()
export class CandidatesService {
    constructor(private readonly candidatesRepository: CandidatesRepository) {
    }

    async create(candidate: Candidate): Promise<number> {
        const candidates: Candidate[] = await this.candidatesRepository.findAll();

        candidates.forEach((candidateSaved) => {
            if (candidateSaved.email === candidate.email) {
                throw new CandidateEmailAlreadyExistsException();
            }
        })
        return await this.candidatesRepository.create(candidate)
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
