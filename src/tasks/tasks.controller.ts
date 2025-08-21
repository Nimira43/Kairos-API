import { Controller, Get } from '@nestjs/common'

@Controller('tasks')
export class TasksController {

  @Get()
  public findAll(): string[] {
    return ['A', 'B']
  }

  @Get('/:id')
  public findOne(): string {
    return 'A'
  }
}
