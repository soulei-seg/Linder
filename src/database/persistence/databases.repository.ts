import {Injectable} from '@nestjs/common';
import {DatabaseDao} from "./dao/database.dao";

@Injectable()
export class DatabasesRepository {
    create(database: DatabaseDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, database: DatabaseDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
