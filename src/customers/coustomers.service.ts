import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './entitys/customers.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customers)
        private customersRepository: Repository<Customers>,
    ) { }

    async findAll(): Promise<Customers[]> {
        return await this.customersRepository.find();
    }

    //   findOne(id: number): Promise<Customer> {
    //     return this.usersRepository.findOneBy({ id });
    //   }

    //   async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    //   }
}