import { Injectable } from '@nestjs/common';

@Injectable()
export class App1Service {
    getHello(data: any): string {
        console.log(data)
        return 'Message Received from Host';
    }
}
