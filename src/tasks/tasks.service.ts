import { randomUUID } from 'node:crypto'
import { CreateTaskDto } from './create-task.dto'
import { ITask, TaskStatus } from './task.model'
import { Injectable } from '@nestjs/common'
import { UpdateTaskDto } from './update-task.dto'

@Injectable()
export class TasksService {
  private tasks: ITask[] = []

  public findAll(): ITask[] {
    return this.tasks
  }

  public findOne(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id)
  }

  public create(createTaskDto: CreateTaskDto): ITask {
    const task: ITask = {
      id: randomUUID(),
      ...createTaskDto,
    }
    this.tasks.push(task)
    return task
  }

  public updateTask(task: ITask, updateTaskDto: UpdateTaskDto): ITask {
    Object.assign(task, updateTaskDto)
    return task
  }

  private isValidStatusTransition(
    currentStatus: TaskStatus,
    newStatus: TaskStatus
  ): boolean {
    const statusOrder = [
      TaskStatus.OPEN,
      TaskStatus.IN_PROGRESS,
      TaskStatus.DONE
    ]
    return statusOrder.indexOf(currentStatus)
  }

  public deleteTask(task: ITask):void {
    this.tasks = this.tasks.filter(
      filteredTask => filteredTask.id !== task.id
    )
  }
}
