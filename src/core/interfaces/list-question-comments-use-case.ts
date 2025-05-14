import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export interface IListQuestionCommentsUseCaseRequest {
  questionId: string;
  page: number;
}

export interface IListQuestionCommentsUseCaseResponse {
  questionComments: Array<QuestionComment>;
}
