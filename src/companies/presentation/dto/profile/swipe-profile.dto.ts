import {ApiProperty} from "@nestjs/swagger";

export class SwipeProfileDto {
    @ApiProperty()
    profileId: string
    @ApiProperty()
    choice: boolean
}