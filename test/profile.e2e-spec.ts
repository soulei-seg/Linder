import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateProfileDto } from "../src/profiles/presentation/dto/create-profile.dto";

describe('Gestion des profiles des candidats',  () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/ (GET)', async () => {
        const createProfileDto: CreateProfileDto = new CreateProfileDto();
        // @ts-ignore
        createProfileDto.salary = 32000;
        // @ts-ignore
        createProfileDto.description = "Bonjour, mon profil."
        // @ts-ignore
        createProfileDto.key_words = ['Micro-service', 'Java', 'Kotlin'];
        // @ts-ignore
        createProfileDto.email = 'antoine.lebossdu33@gmail.com';
        // @ts-ignore
        createProfileDto.first_name = 'Antoine';
        // @ts-ignore
        createProfileDto.last_name = 'Nicolleau';
        // @ts-ignore
        createProfileDto.type = ['CDI', 'CDD']
        // @ts-ignore
        createProfileDto.photo_url = 'https://picture.com/my-profile-picture.png'
        const response = await request(app.getHttpServer())
            .post('/candidates')
            .send(createProfileDto)
            .expect(201)
        expect(response.text).not.toBeUndefined();

        const profile = await request(app.getHttpServer())
            .get('/databases/profiles/' + response.text)
            .expect(200)

        expect(profile.body.salary).toEqual(32000);
        expect(profile.body.description).toEqual("Bonjour, mon profil");
    });
});