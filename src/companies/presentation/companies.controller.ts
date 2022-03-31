import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CompaniesService} from '../application/companies.service';
import {CreateCompanyDto} from './dto/company/create-company.dto';
import {UpdateCompanyDto} from './dto/company/update-company.dto';
import {CompanyDto} from "./dto/company/company.dto";

@Controller('companies')
@ApiTags('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @ApiResponse({status: 200, description: 'Create a new company'})
    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companiesService.create(createCompanyDto);
    }

    @ApiResponse({status: 200, description: 'Should fetch all companies'})
    @Get()
    findAll(): CompanyDto[] {
        const company = new CompanyDto();
        company.name = "Linder"
        company.siren = 324118892
        company.description = "The greatest company of the world"
        company.logo = "https://logo.fr/mon-logo.png"
        company.date = "31/03/2022"
        return [company]
    }

    @ApiResponse({status: 200, description: 'Should fetch a company'})
    @Get(':id')
    findOne(@Param('id') id: string): CompanyDto {
        const company = new CompanyDto();
        company.name = "Linder"
        company.siren = 324118892
        company.description = "The greatest company of the world"
        company.logo = "https://logo.fr/mon-logo.png"
        company.date = "31/03/2022"
        return company
    }

    @ApiResponse({status: 200, description: 'Should update a company'})
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto): CompanyDto {
        const company = new CompanyDto();
        company.name = "Linder"
        company.siren = 324118892
        company.description = "The greatest company of the world"
        company.logo = "https://logo.fr/mon-logo.png"
        company.date = "31/03/2022"
        return company
    }

    @ApiResponse({status: 200, description: 'Should delete a company'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return;
    }
}
