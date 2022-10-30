import { Module } from "@nestjs/common"
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "src/users/entitys/users.entity";
import { CustomerService } from "./coustomers.service";
import { CustomersController } from "./customers.controllers";
import { Customers } from "./entitys/customers.entity";
import { UserSchema } from "./schemas/customers.schemas";

@Module({
    imports: [TypeOrmModule.forFeature([Customers])],
    providers: [CustomerService],
    controllers: [CustomersController]
})

export class CustomersModule {}
