import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestService } from './test/test.service'
import { MessageFormatterService } from './message-formatter/message-formatter.service'
import { LoggerService } from './logger/logger.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    TestService, 
    MessageFormatterService, 
    LoggerService
  ],
})
export class AppModule {}
