import { ApiProperty } from "@nestjs/swagger"

export class OfferDto {
    @ApiProperty()
    description: string
    @ApiProperty()
    keywords: string[]
    @ApiProperty()
    salary: number
    @ApiProperty()
    type: string[]
    @ApiProperty()
    status: string
    @ApiProperty()
    isOpen: boolean
}
