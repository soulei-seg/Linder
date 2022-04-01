import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {OfferDao} from "../../offers/dao/offer.dao";
import {MatchDao} from "../../matches/dao/match.dao";
import {ContractDao} from "../../contracts/dao/contract.dao";

@Entity()
export class ProfileDao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    photo_url: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    description: string;

    @Column("varchar", {array: true})
    key_words: string[];

    @Column()
    salary: string;

    @Column()
    type: string;

    @ManyToMany(() => OfferDao)
    @JoinTable()
    offers: OfferDao[]

    @OneToOne(() => ContractDao, (contract) => contract.profile)
    @JoinColumn()
    contract: ContractDao;

    @ManyToOne(() => MatchDao, (match) => match.profile)
    matches: MatchDao[];
}

export class ProfileToAddDao {
    photo_url: string;

    first_name: string;

    last_name: string;

    email: string;

    description: string;

    key_words: string[];

    salary: string;

    type: string;

    offers: OfferDao[];

    contract: ContractDao;

    matches: MatchDao[];

    constructor(photo_url: string, first_name: string, last_name: string, email: string, description: string, key_words: string[], salary: string, type: string) {
        this.photo_url = photo_url;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.description = description;
        this.key_words = key_words;
        this.salary = salary;
        this.type = type;
    }
}

export class ProfileToUpdateDao {
    photo_url: string;

    first_name: string;

    last_name: string;

    email: string;

    description: string;

    key_words: string[];

    salary: string;

    type: string;

    offers: OfferDao[];

    contract: ContractDao;

    matches: MatchDao[];

    constructor(photo_url: string, first_name: string, last_name: string, email: string, description: string, key_words: string[], salary: string, type: string) {
        this.photo_url = photo_url;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.description = description;
        this.key_words = key_words;
        this.salary = salary;
        this.type = type;
    }
}
