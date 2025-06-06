import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { InMemoryQuestionCommentsRepository } from "test/repositories/in-memory-question-comments-repository";
import { makeQuestionComment } from "test/factories/make-question-comment";
import { ListQuestionCommentsUseCase } from "./list-question-comments";

let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository;
let sut: ListQuestionCommentsUseCase;

describe("List Question Comments", () => {
  beforeEach(() => {
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionCommentsRepository();
    sut = new ListQuestionCommentsUseCase(inMemoryQuestionCommentsRepository);
  });

  it("should be able to list question comments", async () => {
    await inMemoryQuestionCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId("question-1"),
      })
    );

    await inMemoryQuestionCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId("question-1"),
      })
    );

    await inMemoryQuestionCommentsRepository.create(
      makeQuestionComment({
        questionId: new UniqueEntityId("question-1"),
      })
    );

    const { value } = await sut.execute({
      questionId: "question-1",
      page: 1,
    });

    expect(value?.questionComments).toHaveLength(3);
  });

  it("should be able to list paginated question comments", async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionCommentsRepository.create(
        makeQuestionComment({
          questionId: new UniqueEntityId("question-1"),
        })
      );
    }

    const { value } = await sut.execute({
      questionId: "question-1",
      page: 2,
    });

    expect(value?.questionComments).toHaveLength(2);
  });
});
