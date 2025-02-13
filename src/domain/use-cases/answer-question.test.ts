import { expect, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

it("should be possible to answer a question", async () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    content: "New Content",
    instructorId: "1",
    questionId: "2",
  });

  expect(answer.content).toEqual("New Content");
});
