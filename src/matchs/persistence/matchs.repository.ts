import {Injectable} from '@nestjs/common';
import {MatchDao} from "./dao/match.dao";

@Injectable()
export class MatchsRepository {
    create(match: MatchDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, match: MatchDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
