import {Test, TestingModule} from '@nestjs/testing';
import {ContractsController} from './contracts.controller';
import {ContractsService} from '../application/contracts.service';
import {ContractsRepository} from '../persistence/contracts.repository';

describe('ContractsController', () => {
    let controller: ContractsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ContractsController],
            providers: [ContractsService, ContractsRepository],
        }).compile();

        controller = module.get<ContractsController>(ContractsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
