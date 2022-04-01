import {Injectable} from '@nestjs/common';
import {ProfileDao} from "../persistence/dao/profile.dao";
import {ProfilesRepository} from '../persistence/profiles.repository';
import {Profile} from "./model/profile.model";
import {ProfileEmailAlreadyExistsException} from "../../exceptions/profiles-exceptions";

@Injectable()
export class ProfilesService {
    constructor(private readonly profilesRepository: ProfilesRepository) {
    }

    async create(profile: Profile): Promise<number> {
        const profiles: Profile[] = await this.profilesRepository.findAll();

        profiles.forEach((profileSaved) => {
            if (profileSaved.email === profile.email) {
                throw new ProfileEmailAlreadyExistsException();
            }
        })
        return await this.profilesRepository.create(this.mapModelToDao(profile))
    }

    findAll() {
        return;
    }

    findOne(id: number) {
        return;
    }

    update(id: number, profile: Profile) {
        return;
    }

    remove(id: number) {
        return;
    }

    private mapDaoToModel(profileDao: ProfileDao): Profile {
        const profile = new Profile();
        profile.id = profileDao.id
        profile.description = profile.description
        profile.last_name = profileDao.last_name
        profile.first_name = profileDao.first_name
        profile.key_words = profileDao.key_words
        profile.email = profileDao.email
        profile.type = profileDao.type
        profile.photo_url = profileDao.photo_url
        profile.salary = profileDao.salary
        return profile;
    }

    private mapModelToDao(profile: Profile): ProfileDao {
        const profileDao = new ProfileDao();
        profileDao.description = profile.description
        profileDao.last_name = profile.last_name
        profileDao.first_name = profile.first_name
        profileDao.key_words = profile.key_words
        profileDao.email = profile.email
        profileDao.type = profile.type
        profileDao.photo_url = profile.photo_url
        profileDao.salary = profile.salary
        return profileDao;
    }
}
