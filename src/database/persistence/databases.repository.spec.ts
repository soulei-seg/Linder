import {Test, TestingModule} from '@nestjs/testing';
import {DatabasesRepository} from './databases.repository';

describe('DatabasesRepository', () => {
    let repository: DatabasesRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DatabasesRepository],
        }).compile();

        repository = module.get<DatabasesRepository>(DatabasesRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
