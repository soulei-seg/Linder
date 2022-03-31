import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {CompaniesService} from '../application/companies.service';
import {CreateCompanyOfferDto} from './dto/offer/create-company-offer.dto';
import {UpdateCompanyOfferDto} from './dto/offer/update-company-offer.dto';

@Controller('companies/:companyId/offers')
export class CompaniesOfferController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @Post()
    create(@Param('companyId') companyId: string, @Body() createCompanyOfferDto: CreateCompanyOfferDto) {
        return this.companiesService.create(createCompanyOfferDto);
    }

    @Get()
    findAll(@Param('companyId') companyId: string) {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string, @Param('companyId') companyId: string) {
        return this.companiesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Param('companyId') companyId: string, @Body() updateCompanyOfferDto: UpdateCompanyOfferDto) {
        return null;
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Param('companyId') companyId: string) {
        return null;
    }
}
