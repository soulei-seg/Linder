import {OmitType} from "@nestjs/swagger";
import {CompanyDto} from "./company.dto";

export class CreateCompanyDto extends OmitType(CompanyDto, ["date"]) {
}