import {Module} from '@nestjs/common';
import {ProfilesController} from "./presentation/profiles/profiles.controller";
import {ProfilesService} from "./application/profiles/profiles.service";
import {ProfilesRepository} from "./persistence/profiles/profiles.repository";
import {ProfileDao} from "./persistence/profiles/dao/profile.dao";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([ProfileDao])],
    controllers: [ProfilesController],
    providers: [ProfilesService, ProfilesRepository, ProfileDao]
})
export class ProfilesModule {
}
