import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";

export interface IListAnswerCommentsUseCaseRequest {
  answerId: string;
  page: number;
}

export interface IListAnswerCommentsUseCaseResponse {
  answerComments: Array<AnswerComment>;
}
