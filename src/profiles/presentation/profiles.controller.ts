import {Body, Controller, Delete, Get, Param, Patch, Post, UseFilters} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {ProfilesService} from '../application/profiles.service';
import {CreateProfileDto} from './dto/create-profile.dto';
import {UpdateProfileDto} from './dto/update-profile.dto';
import {ProfileDto} from "./dto/profile.dto";
import {Profile} from "../application/model/profile.model";
import {HttpExceptionFilter} from "../../exceptions/http-exception.filter";

@Controller('profiles')
@ApiTags('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {
    }

    @UseFilters(new HttpExceptionFilter())
    @ApiResponse({status: 201, description: 'Create one profile.', type: ProfileDto})
    @Post()
    async create(@Body() createProfileDto: CreateProfileDto): Promise<number> {
        const profile = new Profile();
        // @ts-ignore
        profile.description = createProfileDto.description
        // @ts-ignore
        profile.last_name = createProfileDto.last_name
        // @ts-ignore
        profile.first_name = createProfileDto.first_name
        // @ts-ignore
        profile.key_words = createProfileDto.key_words
        // @ts-ignore
        profile.email = createProfileDto.email
        // @ts-ignore
        profile.type = createProfileDto.type
        // @ts-ignore
        profile.photo_url = createProfileDto.photo_url
        // @ts-ignore
        profile.salary = createProfileDto.salary

        const profileId: number = await this.profilesService.create(profile)
        return profileId;
    }

    @ApiResponse({status: 200, description: 'Get all profiles.', type: ProfileDto, isArray: true})
    @Get()
    findAll(): ProfileDto[] {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.description = "Bonjour, ..."
        profile.key_words = ['Micro-service', 'Java', 'Kotlin'];
        profile.email = 'antoine.lebossdu33@gmail.com';
        profile.first_name = 'Antoine';
        profile.last_name = 'Nicolleau';
        profile.type = ['CDI', 'CDD']
        profile.photo_url = 'https://picture.com/my-profile-picture.png'
        return [profile];
    }

    @ApiResponse({status: 200, description: 'Get one profile.', type: ProfileDto})
    @Get(':id')
    findOne(@Param('id') id: string): ProfileDto {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.description = "Bonjour, ..."
        profile.key_words = ['Micro-service', 'Java', 'Kotlin'];
        profile.email = 'antoine.lebossdu33@gmail.com';
        profile.first_name = 'Antoine';
        profile.last_name = 'Nicolleau';
        profile.type = ['CDI', 'CDD']
        profile.photo_url = 'https://picture.com/my-profile-picture.png'
        return profile;
    }

    @ApiResponse({status: 200, description: 'Edit one profile.', type: ProfileDto})
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto): ProfileDto {
        const profile = new ProfileDto();
        profile.salary = 36000;
        profile.description = "Bonjour, ..."
        profile.key_words = ['Micro-service', 'Java', 'Kotlin'];
        profile.email = 'antoine.lebossdu33@gmail.com';
        profile.first_name = 'Antoine';
        profile.last_name = 'Nicolleau';
        profile.type = ['CDI', 'CDD']
        profile.photo_url = 'https://picture.com/my-profile-picture.png'
        return profile;
    }

    @ApiResponse({status: 200, description: 'Delete a candidate.'})
    @Delete(':id')
    remove(@Param('id') id: string): void {
        return;
    }

    private mapDtoToModel(profileDto: ProfileDto): Profile {
        const profile = new Profile();
        profile.description = profileDto.description
        profile.last_name = profileDto.last_name
        profile.first_name = profileDto.first_name
        profile.key_words = profileDto.key_words
        profile.email = profileDto.email
        profile.type = profileDto.type
        profile.photo_url = profileDto.photo_url
        profile.salary = profileDto.salary
        return profile;
    }

    private mapModelToDto(profile: Profile): ProfileDto {
        const profileDto = new ProfileDto();
        profileDto.description = profile.description
        profileDto.last_name = profile.last_name
        profileDto.first_name = profile.first_name
        profileDto.key_words = profile.key_words
        profileDto.email = profile.email
        profileDto.type = profile.type
        profileDto.photo_url = profile.photo_url
        profileDto.salary = profile.salary
        return profileDto;
    }
}
