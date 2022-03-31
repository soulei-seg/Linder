import {Injectable} from '@nestjs/common';
import {ProfilesRepository} from "../../persistence/profiles/profiles.repository";
import {Profile} from "./model/profile.model";
import {ProfileDao, ProfileToAddDao} from "../../persistence/profiles/dao/profile.dao";

@Injectable()
export class ProfilesService {
    constructor(private readonly profilesRepository: ProfilesRepository) {
    }

    public async create(profile: Profile): Promise<Profile> {
        return this.profilesRepository.create(profile)
    }

    public async findAll(): Promise<Profile[]> {
        return this.profilesRepository.findAll()
    }

    public async findOne(id: number): Promise<Profile> {
        return this.profilesRepository.findOne(id)
    }

    public async update(id: number, profile: Profile): Promise<void> {
        await this.profilesRepository.update(id, profile)
    }

    public async remove(id: number): Promise<void> {
        return this.profilesRepository.remove(id)
    }

    private mapDaoToModel(profileDao: ProfileDao): Profile {
        return new Profile(profileDao.photo_url, profileDao.first_name, profileDao.last_name, profileDao.email, profileDao.description, profileDao.key_words, profileDao.min_salary, profileDao.offer_type);
    }

    private mapModelToDao(profile: Profile): ProfileToAddDao {
        return new ProfileToAddDao(profile.photo_url, profile.first_name, profile.last_name, profile.email, profile.description, profile.key_words, profile.min_salary, profile.offer_type);
    }
}
