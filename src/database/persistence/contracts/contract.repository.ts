import {Injectable} from '@nestjs/common';
import {ContractDao, ContractToAddDao, ContractToUpdateDao} from "./dao/contract.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ContractRepository {
    constructor(
        @InjectRepository(ContractDao)
        private database: Repository<ContractDao>
    ) {
    }

    public async create(contractDao: ContractToAddDao): Promise<ContractDao> {
        return await this.database.save(contractDao);
    }

    public async findAll(): Promise<ContractDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<ContractDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, contractToUpdateDao: ContractToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(id), contractToUpdateDao)
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
