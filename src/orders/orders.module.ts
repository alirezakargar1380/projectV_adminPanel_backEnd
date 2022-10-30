import { Module } from '@nestjs/common';
import { Orders } from './entitys/orders.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
    imports: [TypeOrmModule.forFeature([Orders])],
    providers: [OrdersService],
    controllers: [OrdersController]
})
export class OrdersModule {}
