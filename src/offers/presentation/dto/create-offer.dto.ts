import {OmitType} from "@nestjs/swagger";
import {CompanyDto} from "../../../companies/presentation/dto/company/company.dto";
import {OfferDto} from "./offer.dto";

export class CreateOfferDto extends OmitType(OfferDto, []) {}
