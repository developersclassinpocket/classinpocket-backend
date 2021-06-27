import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
    @Prop()
    subject: string;

    @Prop()
    topic: string;

    @Prop()
    difficulty_level: string;

    @Prop()
    question_text: string;

    @Prop()
    option_type: string;

    @Prop([raw({ text: { type: String }, value: { type: Boolean } })])
    question_options: Record<string, any>[];

    @Prop()
    question_cat: string;

    @Prop()
    question_time: number;

    @Prop()
    question_marks: number;

    @Prop()
    pdf_solution: string;

    @Prop()
    video_solution: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
