import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateOfferDto} from "./dto/create-offer.dto";
import {UpdateOfferDto} from "./dto/update-offer.dto";
import {OffersService} from "../../application/offers/offers.service";
import {ApiTags} from "@nestjs/swagger";
import {OfferDto} from "./dto/offer.dto";
import {Offer} from "../../application/offers/model/offer.model";
import {CompaniesService} from "../../application/companies/companies.service";

@Controller('databases/offers')
@ApiTags('databases')
export class OffersController {
    constructor(private readonly offersService: OffersService, private readonly companiesService: CompaniesService) {
    }

    @Post()
    public async create(@Body() createOfferDto: CreateOfferDto): Promise<OfferDto> {
        const offer = new Offer();
        offer.id = createOfferDto.id;
        offer.description = createOfferDto.description;
        offer.key_words = createOfferDto.key_words;
        offer.salary = createOfferDto.salary;
        offer.type = createOfferDto.type;
        offer.status = createOfferDto.status;
        offer.open_to_recruiters = createOfferDto.open_to_recruiters;
        offer.company = await this.companiesService.findOne(createOfferDto.companyId)
        return await this.offersService.create(offer);
    }

    @Get()
    public async findAll(): Promise<OfferDto[]> {
        return await this.offersService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<OfferDto> {
        return await this.offersService.findOne(+id);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto): Promise<void> {
        const offer = new Offer();
        offer.id = updateOfferDto.id;
        offer.description = updateOfferDto.description;
        offer.key_words = updateOfferDto.key_words;
        offer.salary = updateOfferDto.salary;
        offer.type = updateOfferDto.type;
        offer.status = updateOfferDto.status;
        offer.open_to_recruiters = updateOfferDto.open_to_recruiters;
        return await this.offersService.update(+id, offer);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string): Promise<void> {
        return await this.offersService.remove(+id);
    }
}
