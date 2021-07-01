import { ValidationPipe, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3000;

async function server() {
    const app = await NestFactory.create(AppModule, { cors: true, logger: new Logger() });

    app.use(helmet());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT);
}

server();
