import { InMemoryAnswersRepository } from "@test/repositories/in-memory-answers-repository";
import { EditAnswerUseCase } from "./edit-answer";
import { makeAnswer } from "@test/factories/make-answer";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: EditAnswerUseCase;

describe("Edit Answer Use Case", () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new EditAnswerUseCase(inMemoryAnswersRepository);
  });

  it("should be able to edit a answer", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
        content: "old content",
      },
      new UniqueEntityId("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await sut.execute({
      authorId: "author-1",
      answerId: "answer-1",
      content: "new content",
    });

    expect(inMemoryAnswersRepository.answers[0]).toMatchObject({
      content: "new content",
    });
  });

  it("should not be able to edit a answer created from another person", async () => {
    const newAnswer = makeAnswer(
      {
        authorId: new UniqueEntityId("author-1"),
        content: "old content",
      },
      new UniqueEntityId("answer-1")
    );

    await inMemoryAnswersRepository.create(newAnswer);

    await expect(
      async () =>
        await sut.execute({
          authorId: "different-author",
          answerId: "answer-1",
          content: "new content",
        })
    ).rejects.toBeInstanceOf(Error);
  });
});
