import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionModule } from "./questions-library/question.module";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://god:god123@cluster0.elxva.mongodb.net/question_bank"),
        QuestionModule,
    ],
})
export class AppModule {}
