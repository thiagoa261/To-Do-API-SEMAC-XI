import { Module, Global } from '@nestjs/common';
import { Task, TaskSchema } from './task';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  exports: [MongooseModule],
})
export class ModelsModule {}
