import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {CreateCompanyOfferDto} from "../src/companies/presentation/dto/offer/create-company-offer.dto";
import {CreateCompanyDto} from "../src/companies/presentation/dto/company/create-company.dto";
import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

describe('Gestion des entreprises', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/companies (POST)', async () => {
    let createCompanyDto: CreateCompanyDto = new CreateCompanyDto();
    //@ts-ignore
    createCompanyDto.name = "Linder"
    //@ts-ignore
    createCompanyDto.siren = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000
    //@ts-ignore
    createCompanyDto.description = "Une entreprise révolutionnaire !"
    //@ts-ignore
    createCompanyDto.logo = "https://logo.com/my-logo.png"
    //@ts-ignore
    createCompanyDto.date = "01/04/2022"

    const response = await request(app.getHttpServer())
        .post('/companies')
        .send(createCompanyDto)
        .expect(201)
    expect(response.text).not.toBeUndefined();

    const company = await request(app.getHttpServer())
        .get('/databases/companies/' + response.text)
        .expect(200)

    expect(company.body.name).toEqual("Linder");
    expect(company.body.description).toEqual("Une entreprise révolutionnaire !");
  });
});
