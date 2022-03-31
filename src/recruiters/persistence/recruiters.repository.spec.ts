import {Test, TestingModule} from '@nestjs/testing';
import {RecruitersRepository} from './recruiters.repository';

describe('RecruitersRepository', () => {
    let repository: RecruitersRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [RecruitersRepository],
        }).compile();

        repository = module.get<RecruitersRepository>(RecruitersRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
