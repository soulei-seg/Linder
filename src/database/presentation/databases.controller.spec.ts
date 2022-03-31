import {Test, TestingModule} from '@nestjs/testing';
import {DatabasesController} from './databases.controller';
import {DatabasesService} from '../application/databases.service';
import {DatabasesRepository} from '../persistence/databases.repository';

describe('DatabasesController', () => {
    let controller: DatabasesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DatabasesController],
            providers: [DatabasesService, DatabasesRepository],
        }).compile();

        controller = module.get<DatabasesController>(DatabasesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
