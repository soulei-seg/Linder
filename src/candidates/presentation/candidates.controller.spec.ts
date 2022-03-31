import {Test, TestingModule} from '@nestjs/testing';
import {CandidatesController} from './candidates.controller';
import {CandidatesService} from '../application/candidates.service';
import {CandidatesRepository} from '../persistence/candidates.repository';

describe('CandidatesController', () => {
    let controller: CandidatesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CandidatesController],
            providers: [CandidatesService, CandidatesRepository],
        }).compile();

        controller = module.get<CandidatesController>(CandidatesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
