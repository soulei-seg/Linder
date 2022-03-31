import {Test, TestingModule} from '@nestjs/testing';
import {CompaniesController} from './companies.controller';
import {CompaniesService} from '../application/companies.service';
import {CompaniesRepository} from '../persistence/companies.repository';

describe('CompaniesController', () => {
    let controller: CompaniesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CompaniesController],
            providers: [CompaniesService, CompaniesRepository],
        }).compile();

        controller = module.get<CompaniesController>(CompaniesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
