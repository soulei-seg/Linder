import {Test, TestingModule} from '@nestjs/testing';
import {OffersController} from './offers.controller';
import {OffersService} from '../application/offers.service';
import {OffersRepository} from '../persistence/offers.repository';

describe('OffersController', () => {
    let controller: OffersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OffersController],
            providers: [OffersService, OffersRepository],
        }).compile();

        controller = module.get<OffersController>(OffersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
