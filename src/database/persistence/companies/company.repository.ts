import {Injectable} from '@nestjs/common';
import {CompanyDao, CompanyToAddDao, CompanyToUpdateDao} from "./dao/company.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CompanyRepository {
    constructor(
        @InjectRepository(CompanyDao)
        private database: Repository<CompanyDao>
    ) {
    }

    public async create(companyToAddDao: CompanyToAddDao): Promise<CompanyDao> {
        return await this.database.save(companyToAddDao);
    }

    public async findAll(): Promise<CompanyDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<CompanyDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, companyToUpdateDao: CompanyToUpdateDao): Promise<void> {
        await this.database.update(await this.database.findOne(id), companyToUpdateDao)
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
