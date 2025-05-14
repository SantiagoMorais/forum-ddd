import { Question } from "@/domain/forum/enterprise/entities/question";

export interface IEditQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
  title: string;
  content: string;
}

export interface IEditQuestionUseCaseResponse {
  question: Question;
}
