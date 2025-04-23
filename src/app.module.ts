import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "kwonhyeonwoo",
      password: "12345",
      database: "kwonhyeonwoo",
      logging: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
