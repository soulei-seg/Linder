import {Injectable} from '@nestjs/common';
import { ContractsRepository } from '../persistence/contracts.repository';
import {ContractDao} from "../persistence/dao/contract.dao";
import {Contract} from "./model/contract.model";

@Injectable()
export class ContractsService {
    constructor(private readonly contractsRepository: ContractsRepository) {
    }

    create(contract: Contract) {
        return this.contractsRepository.create(contract)
    }

    findAll() {
        return this.contractsRepository.findAll()
    }

    findOne(id: number) {
        return this.contractsRepository.findOne(id)
    }

    update(id: number, contract: Contract) {
        return this.contractsRepository.update(id, contract)
    }

    remove(id: number) {
        return this.contractsRepository.remove(id)
    }

    private mapDaoToModel(contractDao: ContractDao): Contract {
        const contract = new Contract();
        return contract;
    }

    private mapModelToDao(contract: Contract): ContractDao {
        const contractDao = new ContractDao();
        return contractDao;
    }
}
