import {OmitType} from "@nestjs/swagger";
import {CompanyOfferDto} from "./company-offer.dto";

export class CreateCompanyOfferDto extends OmitType(CompanyOfferDto, []) {}