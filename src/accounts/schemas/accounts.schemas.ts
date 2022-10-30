import { EntitySchema } from 'typeorm';
import { Accounts } from '../entitys/accounts.entity';

export const AccountSchema = new EntitySchema<Accounts>({
    name: 'accounts',
    target: Accounts,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        link: {
            type: String,
        }
    },
    //   relations: {
    //     photos: {
    //       type: 'one-to-many',
    //       target: 'Photo', // the name of the PhotoSchema
    //     },
    //   },
});