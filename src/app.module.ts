import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'
import { CustomersModule } from './customers/customers.module';
import { User } from './users/entitys/users.entity';
import { Customers } from './customers/entitys/customers.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Accounts } from './accounts/entitys/accounts.entity';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vpn',
      entities: [User, Customers, Accounts],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CustomersModule,
    AccountsModule,
    OrdersModule
  ],
  controllers: [
    AppController,
    OrdersController
  ],
  providers: [
    AppService,
    OrdersService
  ],
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply()
//   }
// }
export class AppModule {}
