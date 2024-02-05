import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class App1Controller {
    constructor() {}

    @MessagePattern('tutorial_hello')
    getHello(@Payload() data: any): string {
        console.log(data);
        return 'Message Received from Host';
    }
}
