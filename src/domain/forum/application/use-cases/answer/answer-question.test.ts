import { InMemoryAnswersRepository } from "@test/repositories/in-memory-answers-repository.js";
import { AnswerQuestionUseCase } from "./answer-question";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer Use Case", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create an answer", async () => {
    const { value } = await sut.execute({
      content: "New Content",
      instructorId: "1",
      questionId: "2",
    });

    expect(value?.answer.id).toBeTruthy();
    expect(inMemoryAnswersRepository.answers[0].id).toEqual(value?.answer.id);
  });
});
