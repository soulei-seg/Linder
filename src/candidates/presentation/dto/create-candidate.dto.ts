import { OmitType } from "@nestjs/swagger";
import { CandidateDto } from "./candidate.dto";

export class CreateCandidateDto extends OmitType(CandidateDto, []){}
