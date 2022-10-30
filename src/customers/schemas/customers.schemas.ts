import { EntitySchema } from 'typeorm';
import { Customers } from './../entitys/customers.entity';

export const UserSchema = new EntitySchema<Customers>({
    name: 'customers',
    target: Customers,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
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