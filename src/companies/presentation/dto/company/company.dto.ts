import {ApiProperty} from "@nestjs/swagger";

export class CompanyDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    siren: number
    @ApiProperty()
    description: string
    @ApiProperty()
    logo: string
    @ApiProperty()
    date: string
}
