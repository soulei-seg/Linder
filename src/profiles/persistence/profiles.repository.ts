import {Injectable} from '@nestjs/common';
import {ProfileDao} from "./dao/profile.dao";
import axios from "axios";

@Injectable()
export class ProfilesRepository {
    BASE_URL: string = "http://localhost:3000/databases/profiles";

    async create(profile: ProfileDao): Promise<number> {
        const profileDao: ProfileDao = (await axios.post(this.BASE_URL, profile)).data;
        return profileDao.id;
    }

    async findAll() {
        return (await axios.get(this.BASE_URL)).data;
    }

    findOne(id: number) {
        return;
    }

    update(id: number, profile: ProfileDao) {
        return;
    }

    remove(id: number) {
        return;
    }
}
