export interface AddQuestion {
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
