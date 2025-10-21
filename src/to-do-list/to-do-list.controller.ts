import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import type { Response } from 'express';
import { QueryToDoListDto, ToDoListDto } from './to-do-list.dto';

@Controller('todo-list')
export class ToDoListController {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Get(':id')
  async getTaskById(@Param('id') id: string, @Res() res: Response) {
    const result = await this.toDoListService.getTaskById(id);
    return res.status(result.status).json(result);
  }

  @Post('filter')
  async getTasksByFilter(@Body() body: QueryToDoListDto, @Res() res: Response) {
    const result = await this.toDoListService.getTasksByFilter(body);
    return res.status(result.status).json(result);
  }

  @Post('')
  async createTask(@Body() body: ToDoListDto, @Res() res: Response) {
    const result = await this.toDoListService.createTask(body);
    return res.status(result.status).json(result);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() body: ToDoListDto,
    @Res() res: Response,
  ) {
    const result = await this.toDoListService.updateTask(id, body);
    return res.status(result.status).json(result);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string, @Res() res: Response) {
    const result = await this.toDoListService.deleteTask(id);
    return res.status(result.status).json(result);
  }
}
