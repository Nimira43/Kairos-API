import { Controller, Get, Param } from '@nestjs/common'

@Controller('tasks')
export class TasksController {

  @Get()
  public findAll(): string[] {
    return ['A', 'B']
  }

  @Get('/:id')
  public findOne(@Param() params: any): string {
    return `The number is ${params.id}`
  }
}
