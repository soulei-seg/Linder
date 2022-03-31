import {Module} from '@nestjs/common';
import {DatabasesService} from './application/databases.service';
import {DatabasesController} from './presentation/databases.controller';
import {DatabasesRepository} from "./persistence/databases.repository";

@Module({
    controllers: [DatabasesController],
    providers: [DatabasesService, DatabasesRepository]
})
export class DatabasesModule {
}
