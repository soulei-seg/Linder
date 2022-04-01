import {OmitType} from "@nestjs/swagger";
import {OfferDto} from "./offer.dto";

export class CreateOfferDto extends OmitType(OfferDto, ['profiles', 'company']) {
    companyId: number
}
