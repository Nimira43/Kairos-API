import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  public work(): string {
    return 'Testing done.'
  }
}



