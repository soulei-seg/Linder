import {Module} from '@nestjs/common';
import {OffersService} from './application/offers.service';
import {OffersController} from './presentation/offers.controller';
import {OffersRepository} from "./persistence/offers.repository";

@Module({
    controllers: [OffersController],
    providers: [OffersService, OffersRepository]
})
export class OffersModule {
}
