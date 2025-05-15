import { InMemoryQuestionsRepository } from "@test/repositories/in-memory-questions-repository";
import { CreateQuestionUseCase } from "./create-question";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: CreateQuestionUseCase;

describe("Create Question Use Case", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to create a question", async () => {
    const { value } = await sut.execute({
      authorId: "1",
      content: "What is the best programming language?",
      title: "Best programming language",
      attachmentsIds: ["1", "2"],
    });

    expect(value?.question.authorId).toBeTruthy();
    expect(inMemoryQuestionsRepository.questions[0].id).toEqual(
      value?.question.id
    );
    expect(
      inMemoryQuestionsRepository.questions[0].attachments.currentItems
    ).toHaveLength(2);
    expect(
      inMemoryQuestionsRepository.questions[0].attachments.currentItems
    ).toEqual([
      expect.objectContaining({ attachmentId: new UniqueEntityId("1") }),
      expect.objectContaining({ attachmentId: new UniqueEntityId("2") }),
    ]);
  });
});
