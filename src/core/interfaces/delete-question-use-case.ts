import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";
import { Either } from "../either";
import { NotAllowedError } from "@/domain/forum/application/use-cases/errors/not-allowed-error";

export interface IDeleteQuestionUseCaseRequest {
  questionId: string;
  authorId: string;
}

export type IDeleteQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>;
