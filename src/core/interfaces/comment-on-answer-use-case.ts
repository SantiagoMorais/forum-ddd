import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";

export interface ICommentOnAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
  content: string;
}

export interface ICommentOnAnswerUseCaseResponse {
  answerComment: AnswerComment;
}
