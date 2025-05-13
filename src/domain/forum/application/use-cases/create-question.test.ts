import { InMemoryQuestionsRepository } from "../../../../../test/repositories/in-memory-questions-repository";
import { CreateQuestionUseCase } from "./create-question";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create Question Use Case", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to create a question", async () => {
    const { question } = await sut.execute({
      authorId: "1",
      content: "What is the best programming language?",
      title: "Best programming language",
    });

    expect(question.authorId).toBeTruthy();
    expect(inMemoryQuestionsRepository.questions[0].id).toEqual(question.id);
  });
});
