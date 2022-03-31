import {Injectable} from '@nestjs/common';
import {ProfileDao} from "./dao/profile.dao";

@Injectable()
export class ProfilesRepository {
    create(profile: ProfileDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, profile: ProfileDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
