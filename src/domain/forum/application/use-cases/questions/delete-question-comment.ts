import {
  IDeleteQuestionCommentUseCaseRequest,
  IDeleteQuestionCommentUseCaseResponse,
} from "@/core/interfaces/delete-question-comment-use-case";
import { QuestionCommentsRepository } from "../../repositories/question-comments-repository";

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: IDeleteQuestionCommentUseCaseRequest): Promise<IDeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId);

    if (!questionComment) throw new Error("Question comment not found.");

    if (questionComment.authorId.toValue() !== authorId)
      throw new Error("Not allowed");

    await this.questionCommentsRepository.delete(questionComment);

    return {};
  }
}
