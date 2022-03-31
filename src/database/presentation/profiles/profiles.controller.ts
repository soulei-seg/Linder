import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {CreateProfileDto} from "./dto/create-profile.dto";
import {UpdateProfileDto} from "./dto/update-profile.dto";
import {ProfilesService} from "../../application/profiles/profiles.service";
import {ProfileDto} from "./dto/profile.dto";

@Controller('databases/profiles')
@ApiTags('databases')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {
    }

    @Post()
    public async create(@Body() createProfileDto: CreateProfileDto): Promise<ProfileDto> {
        return await this.profilesService.create(createProfileDto);
    }

    @Get()
    public async findAll(): Promise<ProfileDto[]> {
        return await this.profilesService.findAll();
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<ProfileDto> {
        return await this.profilesService.findOne(+id);
    }

    @Patch(':id')
    public async update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto): Promise<void> {
        return await this.profilesService.update(+id, updateProfileDto);
    }

    @Delete(':id')
    public async remove(@Param('id') id: string): Promise<void> {
        return await this.profilesService.remove(+id);
    }
}
