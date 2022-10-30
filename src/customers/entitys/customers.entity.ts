import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customers {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: number;

    @Column()
    telegramId: string;
}