import { UniqueEntityId } from "../entities/unique-entity-id";

export interface IAnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: UniqueEntityId;
  content: string;
}
