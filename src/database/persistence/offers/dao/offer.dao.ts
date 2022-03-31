import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class OfferDao {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    description: string;

    @Column("varchar", { array: true })
    key_words: string[];

    @Column()
    salary: number;

    @Column()
    type: string;

    @Column()
    status: string;

    @Column()
    open_to_recruiters: boolean;
}

export class OfferToAddDao {

    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;
}

export class OfferToUpdateDao {

    description: string;

    key_words: string[];

    salary: number;

    type: string;

    status: string;

    open_to_recruiters: boolean;
}