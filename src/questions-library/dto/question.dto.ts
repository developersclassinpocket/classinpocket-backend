import { Type } from "class-transformer";
import {
    ArrayMinSize,
    ArrayNotEmpty,
    IsArray,
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
} from "class-validator";

export class QuestionOption {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsBoolean()
    value: boolean;
}

export class Question {
    @IsString()
    @IsNotEmpty()
    board: string;

    @IsString()
    @IsNotEmpty()
    class_name: string;

    @ArrayMinSize(1)
    topic: string[];

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    chapter: string;

    @IsString()
    @IsNotEmpty()
    paper_cat: string;

    @IsString()
    @IsNotEmpty()
    difficulty_level: string;

    @IsString()
    @IsNotEmpty()
    question_text: string;

    @IsString()
    @IsNotEmpty()
    question_cat: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    question_time?: number;

    @IsNumber()
    @IsNotEmpty()
    question_marks: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    pdf_solution?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    video_solution?: string;

    @IsArray()
    @ArrayMinSize(4)
    @ValidateNested({ each: true })
    @Type(() => QuestionOption)
    question_options?: QuestionOption[];
}

export class AddQuestionListReq {
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => Question)
    list: Question[];

    @IsNumber()
    @IsInt()
    number_of_questions: number;
}

export class CreatePaperReq {
    @IsString()
    @IsNotEmpty()
    board: string;

    @IsString()
    @IsNotEmpty()
    class_name: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsArray()
    @ArrayNotEmpty()
    chapter: string[];

    @IsNumber()
    @IsInt()
    paper_marks: number;
}
