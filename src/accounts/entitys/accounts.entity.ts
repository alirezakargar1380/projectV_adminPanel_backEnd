import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: ""
    })
    link: string;

    @Column({
        default: ""
    })
    username: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date
}