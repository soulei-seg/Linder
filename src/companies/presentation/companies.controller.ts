import {Body, Controller, Delete, Get, Param, Patch, Post, UseFilters} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CompaniesService} from '../application/companies.service';
import {CreateCompanyDto} from './dto/company/create-company.dto';
import {UpdateCompanyDto} from './dto/company/update-company.dto';
import {CompanyDto} from "./dto/company/company.dto";
import {Company} from "../application/model/company.model";
import {HttpExceptionFilter} from "../../exceptions/http-exception.filter";

@Controller('companies')
@ApiTags('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    @UseFilters(new HttpExceptionFilter())
    @ApiResponse({status: 201, type: CompanyDto, description: 'Create a new company and return the id'})
    @Post()
    async create(@Body() createCompanyDto: CreateCompanyDto): Promise<number> {
        const companyDto = new CompanyDto();
        // TODO: Problème d'ESLint à régler à cause du OmitType
        // @ts-ignore
        companyDto.name = createCompanyDto.name;
        // @ts-ignore
        companyDto.date = createCompanyDto.date;
        // @ts-ignore
        companyDto.logo = createCompanyDto.logo;
        // @ts-ignore
        companyDto.siren = createCompanyDto.siren;
        // @ts-ignore
        companyDto.description = createCompanyDto.description;

        const companyId: number = await this.companiesService.create(this.mapDtoToModel(companyDto));
        return companyId;
    }

    @ApiResponse({status: 200, type: CompanyDto, isArray: true, description: 'Should fetch all companies'})
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

    @ApiResponse({status: 200, type: CompanyDto, description: 'Should fetch a company'})
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

    @ApiResponse({status: 200, type: CompanyDto, description: 'Should update a company'})
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

    private mapDtoToModel(companyDto: CompanyDto): Company {
        const company = new Company();
        company.id = null;
        company.name = companyDto.name;
        company.date = companyDto.date;
        company.logo = companyDto.logo;
        company.siren = companyDto.siren;
        company.description = companyDto.description;
        return company;
    }

    private mapModelToDto(company: Company): CompanyDto {
        const companyDto = new CompanyDto();
        companyDto.name = company.name;
        companyDto.date = company.date;
        companyDto.logo = company.logo;
        companyDto.siren = company.siren;
        companyDto.description = company.description;
        return companyDto;
    }
}
