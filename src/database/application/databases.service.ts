import {Injectable} from '@nestjs/common';
import {DatabaseDao} from "../persistence/dao/database.dao";
import {Database} from "./model/database.model";

@Injectable()
export class DatabasesService {
    constructor(private readonly databasesRepository: DatabasesRepository) {
    }

    create(database: Database) {
        return this.databasesRepository.create(database)
    }

    findAll() {
        return this.databasesRepository.findAll()
    }

    findOne(id: number) {
        return this.databasesRepository.findOne(id)
    }

    update(id: number, database: Database) {
        return this.databasesRepository.update(id, database)
    }

    remove(id: number) {
        return this.databasesRepository.remove(id)
    }

    private mapDaoToModel(databaseDao: DatabaseDao): Database {
        const database = new Database();
        return database;
    }

    private mapModelToDao(database: Database): DatabaseDao {
        const databaseDao = new DatabaseDao();
        return databaseDao;
    }
}
