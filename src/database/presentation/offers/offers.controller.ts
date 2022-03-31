import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateOfferDto} from "./dto/create-offer.dto";
import {UpdateOfferDto} from "./dto/update-offer.dto";
import {OffersService} from "../../application/offers/offers.service";
import {ApiTags} from "@nestjs/swagger";
import {OfferDto} from "./dto/offer.dto";

@Controller('databases/offers')
@ApiTags('databases')
export class OffersController {
    constructor(private readonly offersService: OffersService) {
    }

    @Post()
    public async create(@Body() createOfferDto: CreateOfferDto): Promise<OfferDto> {
        return await this.offersService.create(createOfferDto);
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
        return await this.offersService.update(+id, updateOfferDto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string): Promise<void> {
        return await this.offersService.remove(+id);
    }
}
