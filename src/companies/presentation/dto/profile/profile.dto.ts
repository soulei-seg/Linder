import {ApiProperty} from "@nestjs/swagger";

export class ProfileDto {
    @ApiProperty()
    photo: string
    @ApiProperty()
    description: string
    @ApiProperty()
    keys: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    localisation: string
    @ApiProperty()
    type: string[]
}