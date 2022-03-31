import {ApiProperty} from "@nestjs/swagger";

export class CompanyOfferDto {
    @ApiProperty()
    description: string
    @ApiProperty()
    keys: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    type: string[]
    @ApiProperty()
    status: string[]
    @ApiProperty()
    isOpen: boolean
}
