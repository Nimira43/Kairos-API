import { FindOneParams } from './find-one-params';
import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { ITask } from './task.model'
import { CreateTaskDto } from './create-task.dto'

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public findAll(): ITask[] {
    return this.tasksService.findAll()
  }

  @Get('/:id')
  public findOne(@Param() params:  FindOneParams): ITask {
    return this.findOneOrFail(params.id)
  }

  @Post()
  public create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto)
  }

  private findOneOrFail(id: string): ITask {
    const task = this.tasksService.findOne(id)

    if (!task) {
      throw new NotFoundException()
    }

    return task
  }
}
