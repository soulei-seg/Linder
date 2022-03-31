import {Test, TestingModule} from '@nestjs/testing';
import {MatchsController} from './matchs.controller';
import {MatchsService} from '../application/matchs.service';
import {MatchsRepository} from '../persistence/matchs.repository';

describe('MatchsController', () => {
    let controller: MatchsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MatchsController],
            providers: [MatchsService, MatchsRepository],
        }).compile();

        controller = module.get<MatchsController>(MatchsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
