import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import {
  IAnswerQuestionUseCaseRequest,
  IAnswerQuestionUseCaseResponse,
} from "@/core/interfaces/answer-question-use-case";
import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    content,
    instructorId,
    questionId,
  }: IAnswerQuestionUseCaseRequest): Promise<IAnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    });

    await this.answersRepository.create(answer);

    return { answer };
  }
}
