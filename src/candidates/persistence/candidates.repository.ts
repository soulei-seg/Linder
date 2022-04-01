import {Injectable} from '@nestjs/common';
import {CandidateDao} from "./dao/candidate.dao";
import axios from "axios";

@Injectable()
export class CandidatesRepository {
    BASE_URL: string = "http://localhost:3000/profiles";

    async create(candidate: CandidateDao): Promise<number> {
        const candidateId: number = (await axios.post(this.BASE_URL, candidate)).data;
        return candidateId
    }

    async findAll() {
        return (await axios.get(this.BASE_URL)).data;
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
