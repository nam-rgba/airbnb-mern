import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
// import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/schema/user.entity'
import { RoomsModule } from './rooms/rooms.module'
import { LikesModule } from './likes/likes.module'
import { BookingsModule } from './bookings/bookings.module'
import { ReviewsModule } from './reviews/reviews.module'

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_URL,
      database: 'nest_v1',
      useNewUrlParser: true,
      synchronize: true,
      logging: true,
      entities: [User],
      useUnifiedTopology: true,
      autoLoadEntities: true
    }),
    RoomsModule,
    LikesModule,
    BookingsModule,
    ReviewsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
