import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestService } from './tester/tester.service'
import { MessageFormatterService } from './message-formatter/message-formatter.service'
import { LoggerService } from './logger/logger.service'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [
    AppService, 
    TestService, 
    MessageFormatterService, 
    LoggerService
  ],
})
export class AppModule {}
