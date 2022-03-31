import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateOfferDto} from "./dto/create-offer.dto";
import {UpdateOfferDto} from "./dto/update-offer.dto";
import {OffersService} from "../../application/offers/offers.service";
import {ApiTags} from "@nestjs/swagger";

@Controller('databases/offers')
@ApiTags('databases')
export class OffersController {
    constructor(private readonly offersService: OffersService) {
    }

    @Post()
    create(@Body() createOfferDto: CreateOfferDto) {
        return this.offersService.create(createOfferDto);
    }

    @Get()
    findAll() {
        return this.offersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.offersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
        return this.offersService.update(+id, updateOfferDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.offersService.remove(+id);
    }
}
