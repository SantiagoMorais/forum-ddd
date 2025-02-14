import { AnswersRepository } from "@/repositories/answers-repository";
import { expect, it } from "vitest";
import { Answer } from "../entities/answer";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

it("should be possible to answer a question", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);
  const answer = await answerQuestion.execute({
    content: "New Content",
    instructorId: "1",
    questionId: "2",
  });

  expect(answer.content).toEqual("New Content");
});
