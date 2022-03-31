import {OmitType} from "@nestjs/swagger";
import {ProfileDto} from "./profile.dto";

export class CreateProfileDto extends OmitType(ProfileDto, []){}
