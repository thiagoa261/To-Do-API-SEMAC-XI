import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'tarefas', timestamps: true, versionKey: false })
export class Task extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isCompleted: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
