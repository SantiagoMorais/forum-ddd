import { Answer } from "@/domain/forum/enterprise/entities/answer";

export interface IListQuestionAnswersUseCaseRequest {
  page: number;
  questionId: string;
}

export interface IListQuestionAnswersUseCaseResponse {
  answers: Array<Answer>;
}
