import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";
import { CreateQuestionUseCase } from "./create-question";

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
};

it("should be able to create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    content: "What is the best programming language?",
    title: "Best programming language",
  });

  expect(question.authorId).toBeTruthy();
});
