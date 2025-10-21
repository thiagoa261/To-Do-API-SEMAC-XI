import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class ToDoListDto {
  @IsString({ message: 'Título deve ser uma string' })
  @IsNotEmpty({ message: 'Título é obrigatório' })
  title: string;

  @IsBoolean({ message: 'isCompleted deve ser um boolean' })
  @IsNotEmpty({ message: 'isCompleted é obrigatório' })
  isCompleted: boolean;
}

export class FilterToDoListDto {
  @IsOptional()
  @IsString({ message: 'Título deve ser uma string' })
  title?: string;

  @IsOptional()
  @IsBoolean({ message: 'isCompleted deve ser um boolean' })
  isCompleted?: boolean;
}

export class QueryToDoListDto {
  @IsNumber({}, { message: 'Offset deve ser um número' })
  @IsNotEmpty({ message: 'Offset é obrigatório' })
  offset: number;

  @IsNumber({}, { message: 'Limit deve ser um número' })
  @Type(() => Number)
  @IsNotEmpty({ message: 'Limit é obrigatório' })
  limit: number;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => FilterToDoListDto)
  filter: FilterToDoListDto;
}
