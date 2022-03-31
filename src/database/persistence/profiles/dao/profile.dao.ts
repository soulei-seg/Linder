import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ProfileDao {
    @PrimaryGeneratedColumn()
    id: string;

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

    @Column()
    key_words: string;

    @Column()
    min_salary: string;

    @Column()
    offer_type: string;
}

@Entity()
export class ProfileToAddDao {
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

    @Column()
    key_words: string;

    @Column()
    min_salary: string;

    @Column()
    offer_type: string;

    constructor(photo_url: string, first_name: string, last_name: string, email: string, description: string, key_words: string, min_salary: string, offer_type: string) {
        this.photo_url = photo_url;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.description = description;
        this.key_words = key_words;
        this.min_salary = min_salary;
        this.offer_type = offer_type;
    }
}

@Entity()
export class ProfileToUpdateDao {
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

    @Column()
    key_words: string;

    @Column()
    min_salary: string;

    @Column()
    offer_type: string;

    constructor(photo_url: string, first_name: string, last_name: string, email: string, description: string, key_words: string, min_salary: string, offer_type: string) {
        this.photo_url = photo_url;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.description = description;
        this.key_words = key_words;
        this.min_salary = min_salary;
        this.offer_type = offer_type;
    }
}
