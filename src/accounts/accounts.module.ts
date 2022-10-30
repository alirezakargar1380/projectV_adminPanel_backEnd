import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from './entitys/accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
var ss = "vless://7d653a83-bdd0-4539-b512-7ee31f580eba@142.44.205.44:17840?path=%2F&security=none&encryption=none&type=ws#Hasan1"
console.log(
  ss.match(/#/g).length
)
