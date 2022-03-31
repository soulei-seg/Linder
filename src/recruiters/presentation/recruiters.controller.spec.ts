import {Test, TestingModule} from '@nestjs/testing';
import {RecruitersController} from './recruiters.controller';
import {RecruitersService} from '../application/recruiters.service';
import {RecruitersRepository} from '../persistence/recruiters.repository';

describe('RecruitersController', () => {
    let controller: RecruitersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [RecruitersController],
            providers: [RecruitersService, RecruitersRepository],
        }).compile();

        controller = module.get<RecruitersController>(RecruitersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
