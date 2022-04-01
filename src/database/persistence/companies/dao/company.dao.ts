import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {OfferDao} from "../../offers/dao/offer.dao";

@Entity()
export class CompanyDao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    siren: number;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    logo: string;

    @Column()
    date: string;

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
