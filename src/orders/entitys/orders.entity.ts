import { Accounts } from 'src/accounts/entitys/accounts.entity';
import { User } from 'src/users/entitys/users.entity';
import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne } from 'typeorm';

@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(() => Accounts, accounts => accounts)
    @JoinColumn()
    account: Accounts
}