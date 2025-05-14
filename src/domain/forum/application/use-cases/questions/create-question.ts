import {
  ICreateQuestionUseCaseRequest,
  ICreateQuestionUseCaseResponse,
} from "@/core/interfaces/create-question-use-case";
import { Question } from "../../../enterprise/entities/question";
import { QuestionsRepository } from "../../repositories/questions-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { right } from "@/core/either";

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
  }: ICreateQuestionUseCaseRequest): Promise<ICreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title,
    });
    await this.questionsRepository.create(question);
    return right({ question });
  }
}
