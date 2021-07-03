import { Body, Controller, Post, Logger } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { QuestionService } from "./question.service";
import { AddQuestionListReq, CreatePaperReq } from "./dto/question.dto";
import { IPaper } from "./interfaces/question.interface";

@ApiTags("Question Bank")
@Controller("api/question")
export class QuestionController {
    private readonly logger = new Logger(QuestionController.name);
    constructor(private readonly questionService: QuestionService) {}

    @Post("/add")
    async addQuestions(@Body() payload: AddQuestionListReq) {
        // save questions in database
        await this.questionService.addQuestions(payload.list);

        return "Questions successfully added";
    }

    @Post("/generate")
    async generatePaper(@Body() createPaperReq: CreatePaperReq): Promise<IPaper> {
        this.logger.log(createPaperReq);

        return {
            board: "",
            subject: "",
            chapter: [],
            class: "",
            class_id: "",
            school_id: "",
            topic: [""],
            student_id: [""],
            paper_description: "",
            paper_duration: 0,
            paper_end_time: "",
            paper_start_time: "",
            paper_marks: 0,
            paper_title: "",
            sections: [
                {
                    title: "",
                    time: 0,
                    total_marks: 0,
                    question_list: [
                        {
                            board: "",
                            chapter: "",
                            class: "",
                            topic: [""],
                            subject: "",
                            difficulty_level: "",
                            paper_cat: "",
                            pdf_solution: "",
                            question_cat: "",
                            question_marks: 0,
                            question_text: "",
                            video_solution: "",
                            question_options: [{ text: "", value: false }],
                            question_time: 0,
                        },
                    ],
                },
            ],
        };
    }
}
