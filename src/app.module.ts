import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionModule } from "./questions-library/question.module";

@Module({
    imports: [
        MongooseModule.forRoot(
            "mongodb+srv://classinpocket:ynGklNfYTc7gUBUa@classinpocketcluster.aghsv.mongodb.net/classinpocketLibrary?retryWrites=true&w=majority",
            {
                useCreateIndex: true,
            }
        ),
        QuestionModule,
    ],
})
export class AppModule {}
