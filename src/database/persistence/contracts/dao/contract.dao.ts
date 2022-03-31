import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {OfferDao} from "../../offers/dao/offer.dao";
import {ProfileDao} from "../../profiles/dao/profile.dao";

@Entity()
export class ContractDao {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToOne(() => ProfileDao, (profile) => profile.contract)
    @JoinColumn()
    profile: ProfileDao;

    @Column()
    salary: number;

    @OneToOne(() => OfferDao, (offer) => offer.contract)
    @JoinColumn()
    offer: OfferDao;

    @Column()
    adjustment: string;

    @Column()
    contract_link: string;
}

export class ContractToAddDao {
    companyId: string;

    profile: ProfileDao;

    salary: number;

    offer: OfferDao;

    adjustment: string;

    contract_link: string;
}

export class ContractToUpdateDao {
    companyIdId: string;

    profile: ProfileDao;

    salary: number;

    offer: OfferDao;

    adjustment: string;

    contract_link: string;
}
