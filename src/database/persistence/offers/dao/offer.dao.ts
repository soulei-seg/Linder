import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {ProfileDao} from "../../profiles/dao/profile.dao";
import {CompanyDao} from "../../companies/dao/company.dao";
import {MatchDao} from "../../matches/dao/match.dao";
import {ContractDao} from "../../contracts/dao/contract.dao";
import {Company} from "../../../application/companies/model/company.model";

@Entity()
export class OfferDao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column("varchar", {array: true})
    key_words: string[];

    @Column()
    salary: number;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    open_to_recruiters: boolean;

    @ManyToMany(() => ProfileDao)
    @JoinTable()
    profiles: ProfileDao[]

    @ManyToOne(() => CompanyDao, (company) => company.offers)
    company: CompanyDao;

    @OneToOne(() => ContractDao, (contract) => contract.offer)
    @JoinColumn()
    contract: ContractDao;

    @ManyToOne(() => MatchDao, (match) => match.offer)
    matches: MatchDao[];
}

export class OfferToAddDao {

    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;

    profiles: ProfileDao[];

    company: Company;

    contract: ContractDao;

    matches: MatchDao[];
}

export class OfferToUpdateDao {

    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;

    profiles: ProfileDao[];

    company: CompanyDao;

    contract: ContractDao;

    matches: MatchDao[];
}