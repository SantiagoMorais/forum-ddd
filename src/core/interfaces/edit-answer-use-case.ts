import { Answer } from "@/domain/forum/enterprise/entities/answer";

export interface IEditAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
  content: string;
}

export interface IEditAnswerUseCaseResponse {
  answer: Answer;
}
