import { Injectable } from '@nestjs/common'
import { TestService } from './test/test.service'

@Injectable()
export class AppService {
  constructor(
    private readonly testService: TestService
  ) {}
  getHello(): string {
    return `Kairos API - ${this.testService.work()}`
  }
}
