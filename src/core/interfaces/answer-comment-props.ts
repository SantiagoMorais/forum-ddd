import { UniqueEntityId } from "../entities/unique-entity-id";

export interface IAnswerCommentProps {
  authorId: UniqueEntityId;
  answerId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
}
