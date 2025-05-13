import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository.js";
import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { AnswerQuestionUseCase } from "./answer-question.js";

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
