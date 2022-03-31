import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {FinanceDao} from "./persistence/finances/dao/finance.dao";

@Module({
    imports: [TypeOrmModule.forFeature([FinanceDao])],
    controllers: [],
    providers: []
})
export class FinancesModule {
}
