import {ApiProperty} from "@nestjs/swagger";

export class ProfileDto {
    @ApiProperty()
    id: number
    @ApiProperty()
    description: string
    @ApiProperty()
    photo_url: string
    @ApiProperty()
    first_name: string
    @ApiProperty()
    last_name: string
    @ApiProperty()
    email: string
    @ApiProperty()
    key_words: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    type: string[]
}
