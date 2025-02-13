import { IAnswerQuestionUseCaseRequest } from "../../core/interfaces/answer-question-use-case";
import { Answer } from "../entities/answer";

export class AnswerQuestionUseCase {
  execute({
    content,
    instructorId,
    questionId,
  }: IAnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content,
      authorId: instructorId,
      questionId,
    });

    return answer;
  }
}
