import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {ProfilesService} from '../application/profiles.service';
import {CreateProfileDto} from './dto/create-profile.dto';
import {UpdateProfileDto} from './dto/update-profile.dto';
import {ProfileDto} from "./dto/profile.dto";

@Controller('profiles')
@ApiTags('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {
    }

    @ApiResponse({ status: 201, description: 'Create one profile.', type: ProfileDto})
    @Post()
    create(@Body() createProfileDto: CreateProfileDto): ProfileDto {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.keywords = ['Micro-service', 'Java', 'Kotlin'];
        profile.mail = 'antoine.lebossdu33@gmail.com';
        profile.firstname = 'Antoine';
        profile.lastname = 'Nicolleau';
        profile.offerType = ['CDI', 'CDD']
        profile.picture = 'https://picture.com/my-profile-picture.png'
        return profile;
    }

    @ApiResponse({ status: 200, description: 'Get all profiles.', type: ProfileDto, isArray: true})
    @Get()
    findAll(): ProfileDto[] {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.keywords = ['Micro-service', 'Java', 'Kotlin'];
        profile.mail = 'antoine.lebossdu33@gmail.com';
        profile.firstname = 'Antoine';
        profile.lastname = 'Nicolleau';
        profile.offerType = ['CDI', 'CDD']
        profile.picture = 'https://picture.com/my-profile-picture.png'
        return [profile];
    }

    @ApiResponse({ status: 200, description: 'Get one profile.', type: ProfileDto})
    @Get(':id')
    findOne(@Param('id') id: string): ProfileDto {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.keywords = ['Micro-service', 'Java', 'Kotlin'];
        profile.mail = 'antoine.lebossdu33@gmail.com';
        profile.firstname = 'Antoine';
        profile.lastname = 'Nicolleau';
        profile.offerType = ['CDI', 'CDD']
        profile.picture = 'https://picture.com/my-profile-picture.png'
        return profile;
    }

    @ApiResponse({ status: 200, description: 'Edit one profile.', type: ProfileDto})
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto): ProfileDto {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.keywords = ['Micro-service', 'Java', 'Kotlin'];
        profile.mail = 'antoine.lebossdu33@gmail.com';
        profile.firstname = 'Antoine';
        profile.lastname = 'Nicolleau';
        profile.offerType = ['CDI', 'CDD']
        profile.picture = 'https://picture.com/my-profile-picture.png'
        return profile;
    }

    @ApiResponse({ status: 200, description: 'Delete a candidate.'})
    @Delete(':id')
    remove(@Param('id') id: string): void {
        return ;
    }
}
