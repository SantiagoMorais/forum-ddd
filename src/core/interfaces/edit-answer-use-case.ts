import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { Either } from "../either";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";
import { NotAllowedError } from "@/domain/forum/application/use-cases/errors/not-allowed-error";

export interface IEditAnswerUseCaseRequest {
  authorId: string;
  answerId: string;
  content: string;
  attachmentsIds: string[];
}

export type IEditAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    answer: Answer;
  }
>;
