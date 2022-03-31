import {Injectable} from '@nestjs/common';
import {ContractDao} from "./dao/contract.dao";

@Injectable()
export class ContractsRepository {
    create(contract: ContractDao) {
        return 'This action adds a new cat';
    }

    findAll() {
        return `This action returns all cats`;
    }

    findOne(id: number) {
        return `This action returns a #${id} cat`;
    }

    update(id: number, contract: ContractDao) {
        return `This action updates a #${id} cat`;
    }

    remove(id: number) {
        return `This action removes a #${id} cat`;
    }
}
