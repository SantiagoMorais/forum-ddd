import { Question } from "@/domain/forum/enterprise/entities/question";
import { Either } from "../either";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";

export interface IGetQuestionBySlugUseCaseRequest {
  slug: string;
}

export type IGetQuestionBySlugUseCaseResponse = Either<
  ResourceNotFoundError,
  { question: Question }
>;
