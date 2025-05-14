import {
  IEditAnswerUseCaseRequest,
  IEditAnswerUseCaseResponse,
} from "@/core/interfaces/edit-answer-use-case";
import { AnswersRepository } from "../../repositories/answers-repository";

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: IEditAnswerUseCaseRequest): Promise<IEditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) throw new Error("Answer not found.");
    if (authorId !== answer.authorId.toValue()) throw new Error("Not allowed");

    answer.content = content;

    await this.answersRepository.save(answer);
    return { answer };
  }
}
