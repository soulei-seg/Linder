import {PartialType} from '@nestjs/swagger';
import {CreateProfileDto} from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    photo_url: string;

    first_name: string;

    last_name: string;

    email: string;

    description: string;

    key_words: string[];

    min_salary: string;

    offer_type: string;

}
