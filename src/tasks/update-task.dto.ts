import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TaskStatus } from './task.model'
import { PartialType } from '@nestjs/mapped-types'
import { CreateTaskDto } from './create-task.dto'

export class UpdateTaskDto extends PartialType(CreateTaskDto){
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