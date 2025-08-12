import { Controller } from '@nestjs/common'

@Controller('tasks')
export class TasksController {

  
  public findAll(): string[] {
    return ['Red', 'Yellow']
  }
}
