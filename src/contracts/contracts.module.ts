import {Module} from '@nestjs/common';
import {ContractsService} from './application/contracts.service';
import {ContractsController} from './presentation/contracts.controller';
import {ContractsRepository} from "./persistence/contracts.repository";

@Module({
    controllers: [ContractsController],
    providers: [ContractsService, ContractsRepository]
})
export class ContractsModule {
}
