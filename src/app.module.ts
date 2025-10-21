import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from '@nestjs/mongoose';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL ?? ""),
    ModelsModule,
    ToDoListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
