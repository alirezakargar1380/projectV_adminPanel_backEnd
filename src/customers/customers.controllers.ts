import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { CustomerService } from "./coustomers.service";
import { CreateCustomerDto } from "./dto/customers.dto";

@Controller("customers")
export class CustomersController {
    constructor(private readonly customersService: CustomerService) { }

    @Get("/")
    async getCustomers() {
        try {
            return await this.customersService.findAll()
        } catch (e) {
            console.log(e)
        }
    }

    @Post("/")
    async addCustomer(@Body() body: CreateCustomerDto) {
        try {
            return await this.customersService.add(body)
        } catch(e) {
            console.log(e)
        }
    }
}