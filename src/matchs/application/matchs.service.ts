import {Injectable} from '@nestjs/common';
import {MatchDao} from "../persistence/dao/match.dao";
import { MatchsRepository } from '../persistence/matchs.repository';
import {Match} from "./model/match.model";

@Injectable()
export class MatchsService {
    constructor(private readonly matchsRepository: MatchsRepository) {
    }

    create(match: Match) {
        return this.matchsRepository.create(match)
    }

    findAll() {
        return this.matchsRepository.findAll()
    }

    findOne(id: number) {
        return this.matchsRepository.findOne(id)
    }

    update(id: number, match: Match) {
        return this.matchsRepository.update(id, match)
    }

    remove(id: number) {
        return this.matchsRepository.remove(id)
    }

    private mapDaoToModel(matchDao: MatchDao): Match {
        const match = new Match();
        return match;
    }

    private mapModelToDao(match: Match): MatchDao {
        const matchDao = new MatchDao();
        return matchDao;
    }
}
