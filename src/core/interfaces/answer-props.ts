import { UniqueEntityId } from "../entities/unique-entity-id";

export interface IAnswerProps {
  content: string;
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  createdAt: Date;
  updatedAt?: Date;
}
