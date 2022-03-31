import {ApiProperty} from "@nestjs/swagger";

export class SwipeOfferDto {
    @ApiProperty()
    offerId: string
    @ApiProperty()
    choice: boolean
}