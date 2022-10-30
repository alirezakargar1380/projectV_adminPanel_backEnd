import { Module } from "@nestjs/common"
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from "./coustomers.service";
import { CustomersController } from "./customers.controllers";
import { Customers } from "./entitys/customers.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    providers: [CustomerService],
    controllers: [CustomersController]
})

export class CustomersModule {}
