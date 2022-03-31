import {OmitType} from "@nestjs/swagger";
import {CompanyDto} from "../../../companies/presentation/dto/company/company.dto";

export class CreateOfferDto extends OmitType(CompanyDto, []) {}
