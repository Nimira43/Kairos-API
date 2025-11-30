import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { TaskStatus } from './task.model'
import { PartialType } from '@nestjs/mapped-types'
import { CreateTaskDto } from './create-task.dto'

export class UpdateTaskDto extends PartialType(CreateTaskDto){
  
}