import { Injectable } from '@nestjs/common'
import { TestService } from './test/test.service'
import { LoggerService } from './logger/logger.service'

@Injectable()
export class AppService {
  constructor(
    private readonly testService: TestService,
    private readonly loggerService: LoggerService,
  ) {}

  getHello(): string {
    return this.loggerService.log(`Kairos API - ${this.testService.work()}`)
  }
}
