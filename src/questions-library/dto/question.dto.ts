import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsBoolean, IsInt, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export class QuestionOption {
    @IsNotEmpty()
    text: string;

    @IsBoolean()
    value: boolean;
}

export class Question {
    @IsNotEmpty()
    board: string;

    @IsNotEmpty()
    class_name: string;

    @ArrayMinSize(1)
    topic: string[];

    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    chapter: string;

    @IsNotEmpty()
    paper_cat: string;

    @IsNotEmpty()
    difficulty_level: string;

    @IsNotEmpty()
    question_text: string;

    @IsNotEmpty()
    question_cat: string;

    @IsNotEmpty()
    @IsNumber()
    question_time?: number;

    @IsNotEmpty()
    @IsNumber()
    question_marks: number;

    @IsNotEmpty()
    pdf_solution: string;

    @IsNotEmpty()
    video_solution: string;

    @ArrayMinSize(4)
    @ValidateNested({ each: true })
    @Type(() => QuestionOption)
    question_options?: QuestionOption[];
}

export class AddQuestionListReq {
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Question)
    list: Question[];

    @IsNumber()
    @IsInt()
    number_of_questions: number;
}

export class CreatePaperReq {
    @IsNotEmpty()
    board: string;

    @IsNotEmpty()
    class_name: string;

    @IsNotEmpty()
    subject: string;

    @ArrayNotEmpty()
    @IsNotEmpty()
    chapter: string[];

    @IsNumber()
    @IsInt()
    paper_marks: number;
}
