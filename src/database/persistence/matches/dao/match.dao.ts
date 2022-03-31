import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {OfferDao} from "../../offers/dao/offer.dao";
import {ProfileDao} from "../../profiles/dao/profile.dao";

@Entity()
export class MatchDao {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToMany(() => OfferDao, (offer) => offer.matches)
    offer: OfferDao;

    @OneToMany(() => ProfileDao, (profile) => profile.matches)
    profile: ProfileDao;

    @Column()
    status: string;
}

export class MatchToAddDao {
    offer: OfferDao;

    profile: ProfileDao;

    status: string;
}

export class MatchToUpdateDao {
    offer: OfferDao;

    profile: ProfileDao;

    status: string;
}
