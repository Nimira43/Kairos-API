import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TaskStatus } from './task.model'

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  title?: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  description?: string

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus
}