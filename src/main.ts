import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe, Logger } from "@nestjs/common";
import * as helmet from "helmet";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3000;

async function server() {
    const app = await NestFactory.create(AppModule, { cors: true, logger: new Logger() });
    app.use(helmet());
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .setTitle("ClassInPocket")
        .setDescription("ClassInPocket Question Bank")
        .setVersion("1.0")
        .addTag("Quesions 0.1")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(PORT);
}

server();
