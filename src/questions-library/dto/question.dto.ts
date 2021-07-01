import { Type } from "class-transformer";
import { ArrayMinSize, IsBoolean, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export interface IAddQuestion {
    subject: string;
    topic: string;
    difficulty_level: string;
    question_text: string;
    option_type: string;
    question_options: [{ text: string; value: boolean }];
    question_cat: string;
    question_time: number;
    question_marks: number;
    pdf_solution: string;
    video_solution: string;
}

export class QuestionOption {
    @IsNotEmpty()
    text: string;

    @IsBoolean()
    value: boolean;
}

export class AddQuestion {
    @IsNotEmpty()
    subject: string;

    @IsNotEmpty()
    topic: string;

    @IsNotEmpty()
    difficulty_level: string;

    @IsNotEmpty()
    question_text: string;

    @IsNotEmpty()
    option_type: string;

    @IsNotEmpty()
    question_cat: string;

    @IsNotEmpty()
    @IsNumber()
    question_time: number;

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
    question_options: QuestionOption[];
}
