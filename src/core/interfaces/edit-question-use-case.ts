import { NotAllowedError } from "@/domain/forum/application/use-cases/errors/not-allowed-error";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";
import { Question } from "@/domain/forum/enterprise/entities/question";
import { Either } from "../either";

export interface IEditQuestionUseCaseRequest {
  authorId: string;
  questionId: string;
  title: string;
  content: string;
  attachmentsIds: Array<string>;
}

export type IEditQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question;
  }
>;
