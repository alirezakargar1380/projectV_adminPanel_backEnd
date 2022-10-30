import { Controller, Post, Body } from '@nestjs/common';
import { is_valid, usernameOfLink } from 'src/utils/vless_links';
import { AccountsService } from './accounts.service';
import errorMessages from 'src/constants/errorMessages';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Post('/')
    async addAccounts(@Body() body: any) {
        try {
            is_valid(body.link)
            body.username = usernameOfLink(body.link)
            return await this.accountsService.add(body)
        } catch (error) {
            console.log(error.message)
            return errorMessages.INTERNAL_SERVER
        }
    }
}
