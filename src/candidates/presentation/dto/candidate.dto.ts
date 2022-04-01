import { ApiProperty } from "@nestjs/swagger"

export class CandidateDto {
    @ApiProperty()
    photo_url: string
    @ApiProperty()
    first_name: string
    @ApiProperty()
    last_name: string
    @ApiProperty()
    description: string
    @ApiProperty()
    email: string
    @ApiProperty()
    key_words: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    type: string[]
}
