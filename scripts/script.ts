import fetch from "node-fetch";

const board = ["rbse", "cbse", "up-board", "mp-board"];
const klass = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const chapter = [
    "chapter1",
    "chapter2",
    "chapter3",
    "chapter4",
    "chapter5",
    "chapter6",
    "chapter7",
    "chapter8",
    "chapter9",
    "chapter10",
];
const subject = [
    "hindi",
    "english",
    "math",
    "science",
    "sst",
    "physics",
    "chemistry",
    "biology",
    "history",
    "ecomomics",
];
const topic = ["topic1", "topic2", "topic3", "topic4", "topic5", "topic6", "topic7", "topic8", "topic9", "topic10"];
const difficulty_level = ["easy", "medium", "hard"];
const paper_cat = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9", "cat10"];
const pdf_solution = "https://thisisthepdfsolution.com";
const video_solution = "https://thisisthevideosolution.com";
const question_cat = ["qcat1", "qcat2", "qcat3", "qcat4", "qcat5", "qcat6", "qcat7", "qcat8", "qcat9", "qcat10"];
const question_marks = 5;
const question_time = 10;
const question_text =
    "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";
const question_options = [
    {
        text:
            "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        value: false,
    },
    {
        text:
            "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        value: true,
    },
    {
        text:
            "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        value: false,
    },
    {
        text:
            "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>",
        value: false,
    },
];

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
}

const q = [];

for (let index = 1; index <= 100; index++) {
    q.push({
        board: board[getRandomInt(0, board.length - 1)],
        class_name: klass[getRandomInt(0, klass.length - 1)],
        chapter: chapter[getRandomInt(0, chapter.length - 1)],
        subject: subject[getRandomInt(0, subject.length - 1)],
        topic: [topic[getRandomInt(0, topic.length - 1)]],
        difficulty_level: difficulty_level[getRandomInt(0, difficulty_level.length - 1)],
        paper_cat: paper_cat[getRandomInt(0, paper_cat.length - 1)],
        pdf_solution: pdf_solution,
        question_cat: question_cat[getRandomInt(0, question_cat.length - 1)],
        question_marks: getRandomInt(1, 10),
        question_text: question_text,
        video_solution: video_solution,
        question_options: question_options,
        question_time: getRandomInt(1, 10),
    });
}

async function run() {
    for (let index = 0; index < 1000; index++) {
        await fetch("http://localhost:3000/api/question/add", {
            method: "POST",
            body: JSON.stringify({ number_of_questions: 30, list: q }),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                return res.text();
            })
            .then((result) => console.log(`${result} ${index}`))
            .catch((err) => console.log(err));
    }
}

run();
