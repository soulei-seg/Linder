import {Injectable} from '@nestjs/common';
import {FinanceDao, FinanceToAddDao, FinanceToUpdateDao} from "./dao/finance.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class FinanceRepository {
    constructor(
        @InjectRepository(FinanceDao)
        private database: Repository<FinanceDao>
    ) {
    }

    public async create(financeToAddDao: FinanceToAddDao): Promise<FinanceDao> {
        return await this.database.save(financeToAddDao);
    }

    public async findAll(): Promise<FinanceDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<FinanceDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, financeToUpdateDao: FinanceToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(id), financeToUpdateDao)
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
