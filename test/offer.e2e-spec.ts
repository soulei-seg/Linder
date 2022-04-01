import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {CreateCompanyOfferDto} from "../src/companies/presentation/dto/offer/create-company-offer.dto";

describe('Gestion des offres', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    const createOfferDto: CreateCompanyOfferDto = new CreateCompanyOfferDto();
    // @ts-ignore
    createOfferDto.salary = 35000
    // @ts-ignore
    createOfferDto.description = "Superbe offre de test ! ";
    //@ts-ignore
    createOfferDto.keywords = ["Javascript"]
    //@ts-ignore
    createOfferDto.type = ["CDI"]
    //@ts-ignore
    createOfferDto.status = 'Open'
    //@ts-ignore
    createOfferDto.isOpen = false
    const response = await request(app.getHttpServer())
        .post('/companies/17/offers')
        .send(createOfferDto)
        .expect(201)
    expect(response.text).not.toBeUndefined();

    const offer = await request(app.getHttpServer())
        .get('/databases/offers/' + response.text)
        .expect(200)

    expect(offer.body.salary).toEqual(35000);
    expect(offer.body.description).toEqual("Superbe offre de test ! ");
  });
});
