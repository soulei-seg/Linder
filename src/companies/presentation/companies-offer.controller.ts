import {Controller, Get, Post, Body, Patch, Param, Delete, UseFilters} from '@nestjs/common';
import {CompaniesService} from '../application/companies.service';
import {CreateCompanyOfferDto} from './dto/offer/create-company-offer.dto';
import {UpdateCompanyOfferDto} from './dto/offer/update-company-offer.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CompanyOfferDto} from "./dto/offer/company-offer.dto";
import {ProfileDto} from "./dto/profile/profile.dto";
import {SwipeProfileDto} from "./dto/profile/swipe-profile.dto";
import {offerStatusInvalidException} from "../../exceptions/offers-exceptions";
import {HttpExceptionFilter} from "../../exceptions/http-exception.filter";

@Controller('companies/:companyId/offers')
@ApiTags('companies')
export class CompaniesOfferController {
    constructor(private readonly companiesService: CompaniesService) {
    }

    OFFER_STATUS = ['OPEN', 'PROVIDED', 'CLOSE']

    @UseFilters(new HttpExceptionFilter())
    @ApiResponse({status: 201, type: CompanyOfferDto, description: 'Create a new offer for a company'})
    @Post()
    async create(@Param('companyId') companyId: string, @Body() createCompanyOfferDto: CreateCompanyOfferDto): Promise<number> {
        const offer = new CompanyOfferDto()
        // TODO: pblm d'eslint
        //@ts-ignore
        offer.description = createCompanyOfferDto.description
        //@ts-ignore
        offer.keywords = createCompanyOfferDto.keywords
        //@ts-ignore
        offer.salary = createCompanyOfferDto.salary
        //@ts-ignore
        offer.type = createCompanyOfferDto.type
        //@ts-ignore
        offer.status = createCompanyOfferDto.status

        if (!this.OFFER_STATUS.includes(offer.status)) {
            throw new offerStatusInvalidException()
        }

        //@ts-ignore
        offer.isOpen = createCompanyOfferDto.isOpen
        return await this.companiesService.createOffer(offer, +companyId)
    }

    @ApiResponse({status: 200, type: CompanyOfferDto, isArray: true, description: 'Get all offers for a company'})
    @Get()
    findAll(@Param('companyId') companyId: string): CompanyOfferDto[] {
        const offer = new CompanyOfferDto()
        offer.description = "Superbe offre"
        offer.keywords = ['php']
        offer.salary = 320000
        offer.type = ['CDI']
        offer.status = 'Open'
        offer.isOpen = true
        return [offer]
    }

    @ApiResponse({status: 200, description: 'Get an offer for a company'})
    @Get(':id')
    findOne(@Param('id') id: string, @Param('companyId') companyId: string) {
        return this.companiesService.findOne(+id);
    }

    @ApiResponse({status: 200, type: CompanyOfferDto, description: 'Update an offer for a company'})
    @Patch(':id')
    update(@Param('id') id: string, @Param('companyId') companyId: string, @Body() updateCompanyOfferDto: UpdateCompanyOfferDto): CompanyOfferDto {
        const offer = new CompanyOfferDto()
        offer.description = "Superbe offre"
        offer.keywords = ['php']
        offer.salary = 320000
        offer.type = ['CDI']
        offer.status = 'Open'
        offer.isOpen = true
        return offer
    }

    @ApiResponse({status: 200, description: 'Delete an offer for a company'})
    @Delete(':id')
    remove(@Param('id') id: string, @Param('companyId') companyId: string) {
        return;
    }

    @ApiResponse({status: 200, type: ProfileDto, isArray: true, description: 'Get all profiles candidates that might match with the offer'})
    @Get(':id/candidates/')
    findAllProfile(@Param(':id') id: string, @Param('candidateId') candidateId: string): ProfileDto[]{
        const profile = new ProfileDto()
        profile.photo = "https://jean.fr/avatar.png"
        profile.description = "Développeur junior"
        profile.keys = ['JS', 'Java', 'Scrum']
        profile.salary = 300000
        profile.localisation = "Bordeaux"
        profile.type = ["CDD"]
        return [profile]
    }

    @ApiResponse({status: 200, type: ProfileDto, description: 'Get a profile that might match with the offer'})
    @Get(':id/matches/')
    findOneProfile(@Param(':id') id: string, @Param('companyId') companyId: string): ProfileDto {
        const profile = new ProfileDto()
        profile.photo = "https://jean.fr/avatar.png"
        profile.description = "Développeur junior"
        profile.keys = ['JS', 'Java', 'Scrum']
        profile.salary = 300000
        profile.localisation = "Bordeaux"
        profile.type = ["CDD"]
        return profile
    }

    @ApiResponse({status: 201, description: 'Swipe a profile that might match with the offer'})
    @Post(':id')
    swipe(@Param(':id') id: string, @Param('companyId') companyId: string, @Body() swipeProfile: SwipeProfileDto) {
        return;
    }
}
