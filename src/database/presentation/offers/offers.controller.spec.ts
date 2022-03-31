import {Test, TestingModule} from '@nestjs/testing';
import {OffersController} from "./offers.controller";
import {OffersRepository} from "../../persistence/offers/offers.repository";
import {OffersService} from "../../application/offers/offers.service";

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
