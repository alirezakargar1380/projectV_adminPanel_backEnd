import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { CustomerService } from "./coustomers.service";

@Controller("customers")
export class CustomersController {
    constructor(private readonly customersService: CustomerService) { }

    @Get("/")
    async getCustomers() {
        try {
            console.log(await this.customersService.findAll())
            return await this.customersService.findAll()

        } catch(e) {
            console.log(e)
        }
    }
}