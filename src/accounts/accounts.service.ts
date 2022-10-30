import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accounts } from './entitys/accounts.entity';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Accounts)
        private accountsRepository: Repository<Accounts>,
    ) { }

    add(data: any) {
        console.log(data)
        return this.accountsRepository.save(data);
    }
}
