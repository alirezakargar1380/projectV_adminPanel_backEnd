import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'
import { CustomersModule } from './customers/customers.module';
import { User } from './users/entitys/users.entity';
import { Customers } from './customers/entitys/customers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vpn',
      entities: [User, Customers],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CustomersModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply()
//   }
// }
export class AppModule {}
