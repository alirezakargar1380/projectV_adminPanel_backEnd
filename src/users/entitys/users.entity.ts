import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// export type UserDocument = User & Document

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: number;

    @Column()
    telegramId: string;
}