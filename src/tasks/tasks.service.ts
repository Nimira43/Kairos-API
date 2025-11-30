import { randomUUID } from 'node:crypto'
import { CreateTaskDto } from './create-task.dto'
import { ITask } from './task.model'
import { Injectable } from '@nestjs/common'
import { UpdateTaskDto } from './update-task.dto'

@Injectable()
export class TasksService {
  private tasks: ITask[] = []

  findAll(): ITask[] {
    return this.tasks
  }

  findOne(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id)
  }

  create(createTaskDto: CreateTaskDto): ITask {
    const task: ITask = {
      id: randomUUID(),
      ...createTaskDto,
    }
    this.tasks.push(task)
    return task
  }

  public updateTask(id: string, updateTaskDto: UpdateTaskDto): ITask

  public deleteTask(id: string):void {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
