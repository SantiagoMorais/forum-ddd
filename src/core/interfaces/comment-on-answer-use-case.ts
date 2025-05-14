import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";
import { Either } from "../either";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";

export interface ICommentOnAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
  content: string;
}

export type ICommentOnAnswerUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    answerComment: AnswerComment;
  }
>;
