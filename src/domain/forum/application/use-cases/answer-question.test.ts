import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository.js";
import { InMemoryAnswersRepository } from "../../../../../test/repositories/in-memory-answers-repository.js";
import { AnswerQuestionUseCase } from "./answer-question.js";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Create Answer Use Case", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create an answer", async () => {
    const { answer } = await sut.execute({
      content: "New Content",
      instructorId: "1",
      questionId: "2",
    });

    expect(answer.id).toBeTruthy();
    expect(inMemoryAnswersRepository.answers[0].id).toEqual(answer.id);
  });
});
