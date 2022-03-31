import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ContractDao} from "./persistence/contracts/dao/contract.dao";

@Module({
    imports: [TypeOrmModule.forFeature([ContractDao])],
    controllers: [],
    providers: []
})
export class ContractsModule {
}
