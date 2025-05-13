import { Question } from "@/domain/forum/enterprise/entities/question";

export interface ICreateQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

export interface ICreateQuestionUseCaseResponse {
  question: Question;
}
