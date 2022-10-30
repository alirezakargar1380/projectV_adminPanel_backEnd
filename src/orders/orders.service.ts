import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entitys/orders.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Orders)
        private ordersRepository: Repository<Orders>,
    ) {}

    findAll() {
        return this.ordersRepository.find({
            relations: {
                account: true,
                user: true
            }
        })
    }
}
