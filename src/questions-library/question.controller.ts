import { Body, Controller, Get, Post } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { AddQuestion } from "./dto/question.dto";

@Controller("question")
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Get("/hello")
    getHello(): string {
        return "hello";
    }

    @Post("/add")
    async addQuestion(@Body() question: AddQuestion) {
        console.log(question);

        await this.questionService.addQuestion(question);
        return "successfull add question";
    }
}
