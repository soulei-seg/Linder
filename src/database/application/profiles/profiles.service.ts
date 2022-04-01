import {Injectable} from '@nestjs/common';
import {ProfilesRepository} from "../../persistence/profiles/profiles.repository";
import {Profile} from "./model/profile.model";
import {ProfileDao} from "../../persistence/profiles/dao/profile.dao";

@Injectable()
export class ProfilesService {
    constructor(private readonly profilesRepository: ProfilesRepository) {
    }

    public async create(profile: Profile): Promise<Profile> {
        const profileDao: ProfileDao = await this.profilesRepository.create(this.mapModelToDao(profile))
        return this.mapDaoToModel(profileDao)
    }

    public async findAll(): Promise<Profile[]> {
        return await this.profilesRepository.findAll()
    }

    public async findOne(id: number): Promise<Profile> {
        return await this.profilesRepository.findOne(id)
    }

    public async update(id: number, profile: Profile): Promise<void> {
        await this.profilesRepository.update(id, this.mapModelToDao(profile))
    }

    public async remove(id: number): Promise<void> {
        return this.profilesRepository.remove(id)
    }

    private mapDaoToModel(profileDao: ProfileDao): Profile {
        const profile: Profile = new Profile();
        profile.id = profileDao.id
        profile.description = profileDao.description
        profile.email = profileDao.email
        profile.key_words = profileDao.key_words
        profile.first_name = profileDao.first_name
        profile.last_name = profileDao.last_name
        profile.salary = profileDao.salary
        profile.type = profileDao.type
        return profile;
    }

    private mapModelToDao(profile: Profile): ProfileDao {
        const profileDao: ProfileDao = new ProfileDao();
        profileDao.id = profile.id
        profileDao.description = profile.description
        profileDao.email = profile.email
        profileDao.key_words = profile.key_words
        profileDao.first_name = profile.first_name
        profileDao.last_name = profile.last_name
        profileDao.salary = profile.salary
        profileDao.type = profile.type
        return profileDao;
    }
}
