import { Answer } from "@/domain/forum/enterprise/entities/answer";

export interface IAnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export interface IAnswerQuestionUseCaseResponse {
  answer: Answer;
}
