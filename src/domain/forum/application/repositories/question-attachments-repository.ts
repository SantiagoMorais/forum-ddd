import { QuestionAttachment } from "../../enterprise/entities/question-attachment";

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<Array<QuestionAttachment>>;
  deleteManyByQuestionId(questionId: string): Promise<void>;
}
