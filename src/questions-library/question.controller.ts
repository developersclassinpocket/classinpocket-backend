import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { AddQuestion } from "./dto/question.dto";

@Controller("api/question")
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Post("/add")
    async addQuestion(@Body() question: AddQuestion) {
        // console.log(question);
        await this.questionService.addQuestion(question);
        return "successfull add question";
    }

    @Post("/add/list")
    async addQuestionList(@Body("list") list: AddQuestion[]) {
        // save questions in database
        return list;
    }

    @Get("/get/:id")
    async getQuestinById(@Param("id") questionId: string) {
        return `fetching question from database ${questionId}`;
    }

    @Get("/list")
    async getQuestionsList() {
        return "return all the questions";
    }
}
