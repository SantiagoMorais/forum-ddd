import { InMemoryQuestionsRepository } from "@test/repositories/in-memory-questions-repository";
import { EditQuestionUseCase } from "./edit-question";
import { makeQuestion } from "@test/factories/make-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: EditQuestionUseCase;

describe("Edit Question Use Case", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to edit a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
        content: "old content",
        title: "old title",
      },
      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      authorId: "author-1",
      questionId: "question-1",
      content: "new content",
      title: "new title",
    });

    expect(inMemoryQuestionsRepository.questions[0]).toMatchObject({
      content: "new content",
      title: "new title",
    });
  });

  it("should not be able to edit a question created from another person", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
        content: "old content",
        title: "old title",
      },
      new UniqueEntityId("question-1")
    );

    await inMemoryQuestionsRepository.create(newQuestion);

    await expect(
      async () =>
        await sut.execute({
          authorId: "different-author",
          questionId: "question-1",
          content: "new content",
          title: "new title",
        })
    ).rejects.toBeInstanceOf(Error);
  });
});
