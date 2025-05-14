import {
  IEditAnswerUseCaseRequest,
  IEditAnswerUseCaseResponse,
} from "@/core/interfaces/edit-answer-use-case";
import { AnswersRepository } from "../../repositories/answers-repository";
import { left, right } from "@/core/either";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { NotAllowedError } from "../errors/not-allowed-error";

export class EditAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
    content,
  }: IEditAnswerUseCaseRequest): Promise<IEditAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) return left(new ResourceNotFoundError("Answer not found."));
    if (authorId !== answer.authorId.toValue())
      return left(new NotAllowedError());

    answer.content = content;

    await this.answersRepository.save(answer);
    return right({ answer });
  }
}
