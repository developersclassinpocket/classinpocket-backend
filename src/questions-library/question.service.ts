import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { QuestionDocument, Question } from "src/schemas/question.schema";
import { AddQuestion } from "./dto/question.dto";

@Injectable()
export class QuestionService {
    constructor(@InjectModel("question") private questionModel: Model<QuestionDocument>) {}

    async addQuestion(question: AddQuestion): Promise<Question> {
        const result = new this.questionModel(question);
        return result.save();
    }

    async insertManyQuestion(questionList: AddQuestion[]) {
        //insert list of questions
    }

    async getQuestionById(questionId: string) {
        //get question by id
    }

    async getAllQuestions() {
        //get all qusestions
    }

    async filterQuestion() {
        //get filter questions
    }
}
