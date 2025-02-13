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
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    await this.answersRepository.create(answer);

    return answer;
  }
}
