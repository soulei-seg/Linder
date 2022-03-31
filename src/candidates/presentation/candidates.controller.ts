import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {CandidatesService} from '../application/candidates.service';
import { CandidateDto } from './dto/candidate.dto';
import {CreateCandidateDto} from './dto/create-candidate.dto';
import {UpdateCandidateDto} from './dto/update-candidate.dto';

@Controller('candidates')
@ApiTags('candidates')
export class CandidatesController {
    constructor(private readonly candidatesService: CandidatesService) {
    }

    @Post()
    create(@Body() createCandidateDto: CreateCandidateDto) : CandidateDto{
        const candidate = new CandidateDto();
        candidate.picture = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.firstname = 'Sam';
        candidate.lastname = 'Lescasse';
        candidate.mail = 'ballbriser@split.com';
        candidate.keywords = ['java', 'sql', 'dotnet'];
        candidate.salary = 2000;
        candidate.offerType = ['cdi'];
        return candidate
    }

    @Get()
    findAll() {
        return this.candidatesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) : CandidateDto{
        const candidate = new CandidateDto();
        candidate.picture = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.firstname = 'John';
        candidate.lastname = 'DOE';
        candidate.mail = 'johndoe@florian.lafuente.fr';
        candidate.keywords = ['php', 'javascript', 'html', 'css'];
        candidate.salary = 2000;
        candidate.offerType = ['cdi', 'cdd'];
        return candidate
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto) : CandidateDto{
        const candidate = new CandidateDto();
        candidate.picture = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        candidate.firstname = 'John';
        candidate.lastname = 'DOE';
        candidate.mail = 'johndoe@florian.lafuente.fr';
        candidate.keywords = ['php', 'nodejs', 'nestjs', 'html', 'css', 'management', 'teamwork', 'AgIiilLLeEEe :B...gateauuu'];
        candidate.salary = 2200;
        candidate.offerType = ['cdi', 'cdd', 'stage pour faire le café (cf. Antoine Nicolleau <3)'];
        return candidate
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.candidatesService.remove(+id);
    }
}
