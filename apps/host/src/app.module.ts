import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'TUTORIAL_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'tutorial_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
