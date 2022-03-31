import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {CompaniesService} from '../application/companies.service';
import {CreateCompanyDto} from './dto/company/create-company.dto';
import {UpdateCompanyDto} from './dto/company/update-company.dto';

@Controller('companies')
@ApiTags('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @Post()
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companiesService.create(createCompanyDto);
    }

    @Get()
    findAll() {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return null;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
        return null;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return null;
    }
}
