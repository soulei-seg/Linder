import {CompanyDao} from "../../../persistence/companies/dao/company.dao";
import {ProfileDao} from "../../../persistence/profiles/dao/profile.dao";
import {CompanyDto} from "../../companies/dto/company.dto";

export class OfferDto {
    id: number;
    description: string;
    key_words: string[];
    salary: number;
    type: string;
    status: string;
    open_to_recruiters: boolean;
    profiles: ProfileDao[];
    company: CompanyDto;
}
