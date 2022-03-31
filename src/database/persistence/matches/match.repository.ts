import {Injectable} from '@nestjs/common';
import {MatchDao, MatchToAddDao, MatchToUpdateDao} from "./dao/match.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MatchRepository {
    constructor(
        @InjectRepository(MatchDao)
        private database: Repository<MatchDao>
    ) {
    }

    public async create(matchToAddDao: MatchToAddDao): Promise<MatchDao> {
        return await this.database.save(matchToAddDao);
    }

    public async findAll(): Promise<MatchDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<MatchDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, matchToUpdateDao: MatchToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(id), matchToUpdateDao)
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
