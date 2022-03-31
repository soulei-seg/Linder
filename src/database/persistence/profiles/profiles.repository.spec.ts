import {Test, TestingModule} from '@nestjs/testing';
import {ProfilesRepository} from './profiles.repository';

describe('ProfilesRepository', () => {
    let repository: ProfilesRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProfilesRepository],
        }).compile();

        repository = module.get<ProfilesRepository>(ProfilesRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
