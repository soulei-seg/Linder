import {Test, TestingModule} from '@nestjs/testing';
import {ProfilesController} from './profiles.controller';
import {ProfilesService} from '../application/profiles.service';
import {ProfilesRepository} from '../persistence/profiles.repository';

describe('ProfilesController', () => {
    let controller: ProfilesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProfilesController],
            providers: [ProfilesService, ProfilesRepository],
        }).compile();

        controller = module.get<ProfilesController>(ProfilesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
