import {ProfileDao} from "../../../persistence/profiles/dao/profile.dao";
import {CompanyDao} from "../../../persistence/companies/dao/company.dao";
import {MatchDao} from "../../../persistence/matches/dao/match.dao";
import {ContractDao} from "../../../persistence/contracts/dao/contract.dao";

export class Offer {
    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;

    profiles: ProfileDao[];

    company: CompanyDao;

    contract: ContractDao;

    matches: MatchDao[];
}
