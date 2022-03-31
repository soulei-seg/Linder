import {Test, TestingModule} from '@nestjs/testing';
import {OffersRepository} from './offers.repository';

describe('OffersRepository', () => {
    let repository: OffersRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OffersRepository],
        }).compile();

        repository = module.get<OffersRepository>(OffersRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
