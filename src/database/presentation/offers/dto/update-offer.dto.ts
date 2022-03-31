import {PartialType} from '@nestjs/swagger';
import {CreateOfferDto} from './create-offer.dto';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {
    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;
}
