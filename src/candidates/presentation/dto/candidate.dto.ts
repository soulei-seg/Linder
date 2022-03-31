import { ApiProperty } from "@nestjs/swagger"

export class CandidateDto {
    @ApiProperty()
    picture: string
    @ApiProperty()
    firstname: string
    @ApiProperty()
    lastname: string
    @ApiProperty()
    mail: string
    @ApiProperty()
    keywords: []
    @ApiProperty()
    salary: number
    @ApiProperty()
    offerType: number
}
