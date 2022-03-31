import {PartialType} from '@nestjs/swagger';
import {CreateCompanyOfferDto} from './create-company-offer.dto';

export class UpdateCompanyOfferDto extends PartialType(CreateCompanyOfferDto) {}
