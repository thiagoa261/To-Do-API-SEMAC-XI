import {
  Injectable,
  InternalServerErrorException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/models/task';
import { QueryToDoListDto, ToDoListDto } from './to-do-list.dto';

@Injectable()
export class ToDoListService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getTasksByFilter(body: QueryToDoListDto) {
    try {
      const matchFilter = {};

      if (body.filter)
        for (const [key, value] of Object.entries(body.filter)) {
          if (!value) continue;
          matchFilter[key] = value;
        }

      const tasks = await this.taskModel
        .find(matchFilter)
        .skip(body.offset)
        .limit(body.limit);

      return {
        status: HttpStatus.OK,
        message: 'Tarefas encontradas com sucesso',
        data: tasks,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Erro ao buscar as tarefas',
      };
    }
  }

  async getTaskById(id: string) {
    try {
      const task = await this.taskModel.findById(id);

      if (!task)
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Tarefa não encontrada',
        };

      return {
        status: HttpStatus.OK,
        message: 'Tarefa encontrada com sucesso',
        data: task,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Erro ao buscar a tarefa',
      };
    }
  }

  async createTask(body: ToDoListDto) {
    try {
      const newTask = await this.taskModel.create(body);
      return {
        status: HttpStatus.CREATED,
        message: 'Tarefa criada com sucesso',
        data: newTask,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Erro ao criar a tarefa',
      };
    }
  }

  async updateTask(id: string, body: ToDoListDto) {
    try {
      const updatedTask = await this.taskModel.findByIdAndUpdate(id, body, {
        returnDocument: 'after',
      });

      if (!updatedTask)
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Tarefa não encontrada',
        };

      return {
        status: HttpStatus.OK,
        message: 'Tarefa atualizada com sucesso',
        data: updatedTask,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Erro ao atualizar a tarefa',
      };
    }
  }

  async deleteTask(id: string) {
    try {
      const deletedTask = await this.taskModel.findByIdAndDelete(id);

      if (!deletedTask)
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Tarefa não encontrada',
        };

      return { status: HttpStatus.OK, message: 'Tarefa deletada com sucesso' };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Erro ao deletar a tarefa',
      };
    }
  }
}
