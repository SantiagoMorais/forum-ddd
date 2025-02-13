import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { IAnswerQuestionUseCaseRequest } from "../../core/interfaces/answer-question-use-case";
import { AnswersRepository } from "../../repositories/answers-repository";
import { Answer } from "../entities/answer";

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    content,
    instructorId,
    questionId,
  }: IAnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}
