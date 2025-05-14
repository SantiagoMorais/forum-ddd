import {
  IDeleteQuestionUseCaseRequest,
  IDeleteQuestionUseCaseResponse,
} from "@/core/interfaces/delete-question-use-case";
import { QuestionsRepository } from "../../repositories/questions-repository";

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
  }: IDeleteQuestionUseCaseRequest): Promise<IDeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) throw new Error("Question not found.");
    if (authorId !== question.authorId.toValue())
      throw new Error("Not allowed");

    await this.questionsRepository.delete(question);
    return {};
  }
}
