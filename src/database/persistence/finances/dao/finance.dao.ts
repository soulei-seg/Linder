import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class FinanceDao {
    @PrimaryGeneratedColumn()
    id: string;

}

export class FinanceToAddDao {
}

export class FinanceToUpdateDao {
}
