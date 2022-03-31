import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {OffersService} from '../application/offers.service';
import {CreateOfferDto} from './dto/create-offer.dto';
import {UpdateOfferDto} from './dto/update-offer.dto';
import {OfferDto} from "./dto/offer.dto";

@Controller('offers')
@ApiTags('offers')
export class OffersController {
    constructor(private readonly offersService: OffersService) {
    }

    @ApiResponse({status: 201, type: OfferDto, description: 'Create a new offer'})
    @Post()
    create(@Body() createOfferDto: CreateOfferDto): OfferDto {
        const offer = new OfferDto()
        offer.description = "Nouvelle offre"
        offer.keywords = ['PHP', 'html']
        offer.status = "is Open"
        offer.salary = 24000
        offer.isOpen = false
        return offer
    }

    @ApiResponse({status: 200, type: OfferDto, isArray: true, description: 'Get all offers'})
    @Get()
    findAll(): OfferDto[] {
        const offer = new OfferDto()
        offer.description = "Nouvelle offre"
        offer.keywords = ['PHP', 'html']
        offer.status = "is Open"
        offer.salary = 24000
        offer.isOpen = false
        return [offer]
    }

    @ApiResponse({status: 200, type: OfferDto, description: 'Get one offer'})
    @Get(':id')
    findOne(@Param('id') id: string): OfferDto {
        const offer = new OfferDto()
        offer.description = "Nouvelle offre"
        offer.keywords = ['PHP', 'html']
        offer.status = "Open"
        offer.salary = 24000
        offer.isOpen = false
        return offer
    }

    @ApiResponse({status: 200, type: OfferDto, description: 'Edit an offer'})
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto): OfferDto {
        const offer = new OfferDto()
        offer.description = "Nouvelle offre interressante"
        offer.keywords = ['PHP', 'html']
        offer.status = "is Open"
        offer.salary = 24000
        offer.isOpen = false
        return offer
    }

    @ApiResponse({status: 200, description: 'Delete an offer'})
    @Delete(':id')
    remove(@Param('id') id: string) {
        return;
    }
}
