import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { QuestionDocument } from "src/schemas/question.schema";
import { Question } from "./dto/question.dto";

interface FilterQuestion {
    board: string;
    class_name: string;
    subject: string;
    chapter: string[];
    questionMarks: number;
    numberOfQuestions: number;
}

@Injectable()
export class QuestionService {
    constructor(@InjectModel("question") private questionModel: Model<QuestionDocument>) {}

    async addQuestions(questions: Question[]) {
        await this.questionModel.insertMany(questions, { lean: true });
    }

    async getQuestions(filterQuestion: FilterQuestion) {
        const result = await this.questionModel.aggregate([
            {
                $match: {
                    board: filterQuestion.board,
                    class_name: filterQuestion.class_name,
                    subject: filterQuestion.subject,
                    chapter: { $in: filterQuestion.chapter },
                    question_marks: filterQuestion.questionMarks,
                },
            },
            {
                $sample: {
                    size: filterQuestion.numberOfQuestions,
                },
            },
        ]);

        return result;
    }
}
