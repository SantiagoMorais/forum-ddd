import { Question } from "@/domain/forum/enterprise/entities/question";

export interface IListRecentQuestionsUseCaseRequest {
  page: number;
}

export interface IListRecentQuestionsUseCaseResponse {
  questions: Array<Question>;
}
