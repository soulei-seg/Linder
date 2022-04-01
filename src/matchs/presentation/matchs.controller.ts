import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {MatchsService} from '../application/matchs.service';
import {CreateMatchDto} from './dto/create-match.dto';
import {UpdateMatchDto} from './dto/update-match.dto';
import {MatchDto} from "./dto/match.dto";
import {generateMockMatchDto} from "../../tools/generate-dto";

@Controller('matchs')
@ApiTags('matchs')
export class MatchsController {
    constructor(private readonly matchsService: MatchsService) {
    }

    @Post()
    create(@Body() createMatchDto: CreateMatchDto): MatchDto {
        return generateMockMatchDto();
    }

    @Get()
    findAll(): MatchDto[] {
        return [generateMockMatchDto()];
    }

    @Get(':id')
    findOne(@Param('id') id: string): MatchDto {
        return generateMockMatchDto();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto): MatchDto {
        return generateMockMatchDto();
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {

    }
}
