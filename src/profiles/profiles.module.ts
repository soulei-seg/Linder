import {Module} from '@nestjs/common';
import {ProfilesService} from './application/profiles.service';
import {ProfilesController} from './presentation/profiles.controller';
import {ProfilesRepository} from "./persistence/profiles.repository";

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService, ProfilesRepository]
})
export class ProfilesModule {
}
