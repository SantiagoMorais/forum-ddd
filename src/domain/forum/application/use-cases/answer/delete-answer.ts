import {
  IDeleteAnswerUseCaseRequest,
  IDeleteAnswerUseCaseResponse,
} from "@/core/interfaces/delete-answer-use-case";
import { AnswersRepository } from "../../repositories/answers-repository";

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: IDeleteAnswerUseCaseRequest): Promise<IDeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) throw new Error("Answer not found.");
    if (answer.authorId.toValue() !== authorId) throw new Error("Not allowed.");

    await this.answersRepository.delete(answer);
    return {};
  }
}
