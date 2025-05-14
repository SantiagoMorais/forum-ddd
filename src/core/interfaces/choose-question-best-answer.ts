import { Question } from "@/domain/forum/enterprise/entities/question";

export interface IChooseQuestionBestAnswerUseCaseRequest {
  questionAuthorId: string;
  answerId: string;
}

export interface IChooseQuestionBestAnswerUseCaseResponse {
  question: Question;
}
