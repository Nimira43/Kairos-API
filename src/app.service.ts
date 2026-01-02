import { Injectable } from '@nestjs/common'
import { TestService } from './tester/tester.service'
import { LoggerService } from './logger/logger.service'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  constructor(
    private readonly testService: TestService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    const prefix = this.configService.get<string>('app.messagePrefix')
    return this.loggerService.log(
      `${prefix} Kairos API - ${this.testService.work()}`
    )
  }
}
