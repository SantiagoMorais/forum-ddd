import {
  IDeleteAnswerCommentUseCaseRequest,
  IDeleteAnswerCommentUseCaseResponse,
} from "@/core/interfaces/delete-answer-comment-use-case";
import { AnswerCommentsRepository } from "../../repositories/answer-comments-repository";

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: IDeleteAnswerCommentUseCaseRequest): Promise<IDeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId);

    if (!answerComment) throw new Error("Answer comment not found.");

    if (answerComment.authorId.toValue() !== authorId)
      throw new Error("Not allowed");

    await this.answerCommentsRepository.delete(answerComment);

    return {};
  }
}
