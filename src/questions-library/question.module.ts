import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionSchema } from "src/schemas/question.schema";

import { QuestionController } from "./question.controller";
import { QuestionService } from "./question.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "question", schema: QuestionSchema }])],
    controllers: [QuestionController],
    providers: [QuestionService],
})
export class QuestionModule {}
