import {Injectable} from '@nestjs/common';
import {ProfileDao, ProfileToAddDao} from "./dao/profile.dao";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ProfilesRepository {
    constructor(
        @InjectRepository(ProfileDao)
        private database: Repository<ProfileDao>
    ) {
    }

    public async create(profileDao: ProfileToAddDao): Promise<ProfileDao> {
        return await this.database.save(profileDao);
    }

    public async findAll(): Promise<ProfileDao[]> {
        return await this.database.find();
    }

    public async findOne(id: number): Promise<ProfileDao> {
        return await this.database.findOne(id);
    }

    public async update(id: number, profileToUpdateDao: ProfileDao): Promise<void> {
        return (await this.database.update(await this.database.findOne(id), profileToUpdateDao)).raw
    }

    public async remove(id: number): Promise<void> {
        await this.database.remove(await this.database.findOne(id))
    }
}
