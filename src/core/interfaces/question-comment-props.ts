import { UniqueEntityId } from "../entities/unique-entity-id";

export interface IQuestionCommentProps {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}
