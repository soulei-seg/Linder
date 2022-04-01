import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CompanyDto} from "./dto/company.dto";
import {CompaniesService} from "../../application/companies/companies.service";
import {Company} from "../../application/companies/model/offer.model";

@Controller('databases/companies')
@ApiTags('databases')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @Post()
    public async create(@Body() companyDto: CompanyDto): Promise<CompanyDto> {
        const company: Company = await this.companiesService.create(companyDto);
        return company
    }

    @Get()
    public async findAll(): Promise<CompanyDto[]> {
        return await this.companiesService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<CompanyDto> {
        return await this.companiesService.findOne(+id);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() companyDto: CompanyDto): Promise<CompanyDto> {
        return await this.companiesService.update(+id, companyDto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string): Promise<void> {
        return await this.companiesService.remove(+id);
    }
}
