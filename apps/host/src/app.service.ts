import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
    constructor(
        @Inject('TUTORIAL_SERVICE') private readonly client: ClientProxy
    ) {}

    async getHello() {
        return await this.client.send('tutorial_hello', 'Hello World!');
    }
}