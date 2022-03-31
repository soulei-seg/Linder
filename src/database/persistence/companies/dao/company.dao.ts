import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {OfferDao} from "../../offers/dao/offer.dao";

@Entity()
export class CompanyDao {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    siren: number;

    @Column()
    description: string;

    @Column()
    logo_url: string;

    @Column()
    registration_date: string;

    @OneToMany(() => OfferDao, (offer) => offer.company)
    offers: OfferDao[]

}

export class CompanyToAddDao {
    name: string;

    siren: number;

    description: string;

    logo_url: string;

    registration_date: string;

    offers: OfferDao[]
}

export class CompanyToUpdateDao {
    name: string;

    siren: number;

    description: string;

    logo_url: string;

    registration_date: string;

    offers: OfferDao[]
}
