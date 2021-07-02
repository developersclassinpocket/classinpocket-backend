import { Type } from "class-transformer";
import { ArrayMinSize, ArrayNotEmpty, IsBoolean, IsInt, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";

export interface IPaperSection {
    title: string;
    time: number;
    total_marks: number;
    question_list: IQuestion[];
}

export interface IPaper {
    board: string;
    class: string;
    subject: string;
    chapter: string[];
    topic: string[];
    paper_title: string;
    paper_marks: number;
    paper_duration: number;
    paper_description: string;
    paper_start_time: string;
    paper_end_time: string;
    school_id: string;
    class_id: string;
    student_id: string[];
    sections: IPaperSection[];
}

export interface IQuestion {
    board: string;
    class: string;
    subject: string;
    topic: string[];
    chapter: string;
    paper_cat: string;
    difficulty_level: string;
    question_text: string;
    question_options?: [{ text: string; value: boolean }];
    question_cat: string;
    question_time?: number;
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

export class Question {
    @IsNotEmpty()
    board: string;

    @IsNotEmpty()
    class: string;

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
    number_of_questoins: number;
}

export class CreatePaperReq {
    @IsNotEmpty()
    board: string;

    @IsNotEmpty()
    class: string;

    @IsNotEmpty()
    subject: string;

    @ArrayNotEmpty()
    @IsNotEmpty()
    chapter: string[];

    @IsNumber()
    @IsInt()
    paper_marks: number;
}
