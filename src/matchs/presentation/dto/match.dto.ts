import {ApiProperty} from "@nestjs/swagger";
import {OfferDto} from "../../../offers/presentation/dto/offer.dto";
import {ProfileDto} from "../../../profiles/presentation/dto/profile.dto";

export class MatchDto {
    @ApiProperty()
    offer: OfferDto;

    @ApiProperty()
    profile: ProfileDto;

    @ApiProperty()
    status: string;
}
