import { InMemoryAnswersRepository } from "@test/repositories/in-memory-answers-repository";
import { makeQuestion } from "@test/factories/make-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { makeAnswer } from "@test/factories/make-answer";
import { InMemoryQuestionsRepository } from "@test/repositories/in-memory-questions-repository";
import { DeleteAnswerUseCase } from "./delete-answer";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: DeleteAnswerUseCase;

describe("Delete Answer Use Case", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new DeleteAnswerUseCase(inMemoryAnswersRepository);
  });

  it("should be able to delete a answer", async () => {
    const question = makeQuestion({}, new UniqueEntityId("question-id"));
    await inMemoryQuestionsRepository.create(question);

    const answer = makeAnswer(
      { authorId: new UniqueEntityId("author-id"), questionId: question.id },
      new UniqueEntityId("answer-id")
    );
    await inMemoryAnswersRepository.create(answer);

    await sut.execute({
      answerId: "answer-id",
      authorId: "author-id",
    });

    expect(inMemoryAnswersRepository.answers).toHaveLength(0);
  });

  it("should not be able to delete a answer from another user", async () => {
    const question = makeQuestion({}, new UniqueEntityId("question-id"));
    await inMemoryQuestionsRepository.create(question);

    const answer = makeAnswer(
      { authorId: new UniqueEntityId("author-id"), questionId: question.id },
      new UniqueEntityId("answer-id")
    );
    await inMemoryAnswersRepository.create(answer);

    await expect(
      async () =>
        await sut.execute({
          answerId: "answer-id",
          authorId: "different-author-id",
        })
    ).rejects.toBeInstanceOf(Error);
  });
});
