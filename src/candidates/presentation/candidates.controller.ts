import {Controller, Get, Post, Body, Patch, Param, Delete, UseFilters} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CandidatesService} from '../application/candidates.service';
import { CandidateDto } from './dto/candidate.dto';
import {CreateCandidateDto} from './dto/create-candidate.dto';
import {UpdateCandidateDto} from './dto/update-candidate.dto';
import {OfferDto} from "./dto/offer.dto";
import {SwipeOfferDto} from "./dto/swipe-offer.dto";
import {HttpExceptionFilter} from "../../exceptions/http-exception.filter";

@Controller('candidates')
@ApiTags('candidates')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {
    }

    @UseFilters(new HttpExceptionFilter())
    @Post()
    @ApiResponse({ status: 201, description: 'Create one candidate.', type: CandidateDto})
    async create(@Body() createCandidateDto: CreateCandidateDto): Promise<number> {
        const candidateDto = new CandidateDto();
        // @ts-ignore
        candidateDto.photo_url = createCandidateDto.photo_url
        // @ts-ignore
        candidateDto.first_name =  createCandidateDto.first_name
        // @ts-ignore
        candidateDto.description = createCandidateDto.description
        // @ts-ignore
        candidateDto.last_name = createCandidateDto.last_name
        // @ts-ignore
        candidateDto.email = createCandidateDto.email
        // @ts-ignore
        candidateDto.key_words = createCandidateDto.key_words
        // @ts-ignore
        candidateDto.salary = createCandidateDto.salary
        // @ts-ignore
        candidateDto.type = createCandidateDto.type
        // @ts-ignore
        const candidateId: number = await this.candidatesService.create(candidateDto);
        return candidateId;
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Get all candidates.', type: CandidateDto, isArray: true})
    findAll(): CandidateDto[] {
        const candidate = new CandidateDto();
        candidate.photo_url = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.first_name = 'John';
        candidate.description = 'Salut';
        candidate.last_name = 'DOE';
        candidate.email = 'johndoe@florian.lafuente.fr';
        candidate.key_words = ['php', 'javascript', 'html', 'css'];
        candidate.salary = 2000;
        candidate.type = ['cdi', 'cdd'];
        return [candidate]
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Get one candidate.', type: CandidateDto})
    findOne(@Param('id') id: string): CandidateDto {
        const candidate = new CandidateDto();
        candidate.photo_url = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.first_name = 'John';
        candidate.last_name = 'DOE';
        candidate.description = 'Salut';
        candidate.email = 'johndoe@florian.lafuente.fr';
        candidate.key_words = ['php', 'javascript', 'html', 'css'];
        candidate.salary = 2000;
        candidate.type = ['cdi', 'cdd'];
        return candidate
    }

    @Patch(':id')
    @ApiResponse({ status: 200, description: 'Edit a candidate.', type: CandidateDto})
    update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto): CandidateDto {
        const candidate = new CandidateDto();
        candidate.photo_url = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.first_name = 'John';
        candidate.last_name = 'DOE';
        candidate.description = 'Salut';
        candidate.email = 'johndoe@florian.lafuente.fr';
        candidate.key_words = ['php', 'nodejs', 'nestjs', 'html', 'css', 'management', 'teamwork', 'AgIiilLLeEEe :B...gateauuu'];
        candidate.salary = 2200;
        candidate.type = ['cdi', 'cdd', 'stage pour faire le café (cf. Antoine Nicolleau <3)'];
        return candidate
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete a candidate.'})
    remove(@Param('id') id: string) {
        return ;
    }

    @Get(':id/companies')
    @ApiResponse({ status: 200, description: 'Get all potential offers for the given candidate.', type: OfferDto, isArray: true})
    getPotentialCompanies(@Param('id') candidateId: string): OfferDto[] {
        const offer = new OfferDto();
        offer.description = 'Challenging job with a lot of opportunities !'
        offer.keywords = ['Javascript', 'NestJS', 'Scrum', 'Coffee Drinker'];
        offer.salary = 37500;
        offer.type = ['CDI'];
        offer.status = 'Open';
        offer.isOpen = false;
        return [offer]
    }

    @Get(':id/matchs')
    @ApiResponse({ status: 200, description: 'Get all matchs for the given candidate.', type: OfferDto, isArray: true})
    getMatchs(@Param('id') candidateId: string): OfferDto[] {
        const offer = new OfferDto();
        offer.description = 'Challenging job with a lot of opportunities !'
        offer.keywords = ['Javascript', 'NestJS', 'Scrum', 'Coffee Drinker'];
        offer.salary = 37500;
        offer.type = ['CDI'];
        offer.status = 'Open';
        offer.isOpen = false;
        return [offer]
    }

    @ApiResponse({status: 201, description: 'Swipe an offer that might match with the candidate'})
    @Post(':id')
    swipe(@Param(':id') candidateId: string, @Body() swipeProfile: SwipeOfferDto) {
        return;
    }
}
