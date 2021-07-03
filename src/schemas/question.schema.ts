import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
class Question {
    @Prop({ index: true })
    board: string;

    @Prop({ index: true })
    class_name: string;

    @Prop({ index: true })
    subject: string;

    @Prop()
    topic: string[];

    @Prop({ index: true })
    chapter: string;

    @Prop()
    paper_cat: string;

    @Prop()
    difficulty_level: string;

    @Prop()
    question_text: string;

    @Prop([raw({ text: { type: String }, value: { type: Boolean } })])
    question_options?: Record<string, any>[];

    @Prop()
    question_cat: string;

    @Prop()
    question_time?: number;

    @Prop({ index: true })
    question_marks: number;

    @Prop()
    pdf_solution: string;

    @Prop()
    video_solution: string;
}

export type QuestionDocument = Question & Document;
export const QuestionSchema = SchemaFactory.createForClass(Question);
