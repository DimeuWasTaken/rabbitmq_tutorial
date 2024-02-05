import { NestFactory } from '@nestjs/core';
import { App1Module } from './app1.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(App1Module, {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'tutorial_queue',
          queueOptions: {
            durable: false
          },
        },
    });
    app.listen();
}
bootstrap();
