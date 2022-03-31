import {Injectable} from '@nestjs/common';
import {ProfileDao} from "../persistence/dao/profile.dao";
import {Profile} from "./model/profile.model";

@Injectable()
export class ProfilesService {
    constructor(private readonly profilesRepository: ProfilesRepository) {
    }

    create(profile: Profile) {
        return this.profilesRepository.create(profile)
    }

    findAll() {
        return this.profilesRepository.findAll()
    }

    findOne(id: number) {
        return this.profilesRepository.findOne(id)
    }

    update(id: number, profile: Profile) {
        return this.profilesRepository.update(id, profile)
    }

    remove(id: number) {
        return this.profilesRepository.remove(id)
    }

    private mapDaoToModel(profileDao: ProfileDao): Profile {
        const profile = new Profile();
        return profile;
    }

    private mapModelToDao(profile: Profile): ProfileDao {
        const profileDao = new ProfileDao();
        return profileDao;
    }
}
