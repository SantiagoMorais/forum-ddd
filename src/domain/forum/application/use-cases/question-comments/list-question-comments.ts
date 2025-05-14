import {
  IListQuestionCommentsUseCaseRequest,
  IListQuestionCommentsUseCaseResponse,
} from "@/core/interfaces/list-question-comments-use-case";
import { QuestionCommentsRepository } from "../../repositories/question-comments-repository";

export class ListQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    page,
    questionId,
  }: IListQuestionCommentsUseCaseRequest): Promise<IListQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      });

    return { questionComments };
  }
}
