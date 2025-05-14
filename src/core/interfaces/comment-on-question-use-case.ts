import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export interface ICommentOnQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
  content: string;
}

export interface ICommentOnQuestionUseCaseResponse {
  questionComment: QuestionComment;
}
