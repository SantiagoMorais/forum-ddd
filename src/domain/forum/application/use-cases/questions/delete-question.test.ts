import { InMemoryQuestionsRepository } from "@test/repositories/in-memory-questions-repository";
import { DeleteQuestionUseCase } from "./delete-question";
import { makeQuestion } from "@test/factories/make-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { NotAllowedError } from "../../../../../core/errors/not-allowed-error";
import { InMemoryQuestionAttachmentsRepository } from "@test/repositories/in-memory-question-attachments-repository";
import { makeQuestionAttachment } from "@test/factories/make-question-attachment";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository;
let sut: DeleteQuestionUseCase;

describe("Delete Question Use Case", () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentsRepository =
      new InMemoryQuestionAttachmentsRepository();

    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionAttachmentsRepository
    );

    sut = new DeleteQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to delete a question", async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId("author-1") },
      new UniqueEntityId("question-1")
    );
    await inMemoryQuestionsRepository.create(newQuestion);

    inMemoryQuestionAttachmentsRepository.items.push(
      makeQuestionAttachment({
        questionId: new UniqueEntityId("question-1"),
        attachmentId: new UniqueEntityId("1"),
      }),
      makeQuestionAttachment({
        questionId: new UniqueEntityId("question-1"),
        attachmentId: new UniqueEntityId("2"),
      })
    );

    await sut.execute({ authorId: "author-1", questionId: "question-1" });

    expect(inMemoryQuestionsRepository.questions).toHaveLength(0);
    expect(inMemoryQuestionAttachmentsRepository.items).toHaveLength(0);
  });

  it("should not be able to delete a question created from another person", async () => {
    const newQuestion = makeQuestion(
      { authorId: new UniqueEntityId("author-1") },
      new UniqueEntityId("question-1")
    );
    await inMemoryQuestionsRepository.create(newQuestion);

    const result = await sut.execute({
      authorId: "different-author",
      questionId: "question-1",
    });

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(NotAllowedError);
  });
});
