import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {CorsOptions} from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: process.env.CORS_ALLOW,
            methods: process.env.CORS_METHODS,
            maxAge: parseInt(process.env.CORS_MAX_AGE),
        } as CorsOptions
    });
    await app.listen(process.env.APP_PORT || 3000);
}

bootstrap();
