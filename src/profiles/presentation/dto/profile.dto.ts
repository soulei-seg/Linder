import {ApiProperty} from "@nestjs/swagger";

export class ProfileDto {
    @ApiProperty()
    picture: string
    @ApiProperty()
    firstname: string
    @ApiProperty()
    lastname: string
    @ApiProperty()
    mail: string
    @ApiProperty()
    keywords: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    offerType: string[]
}
