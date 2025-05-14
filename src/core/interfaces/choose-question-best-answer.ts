import { Question } from "@/domain/forum/enterprise/entities/question";
import { Either } from "../either";
import { ResourceNotFoundError } from "@/domain/forum/application/use-cases/errors/resource-not-found-error";
import { NotAllowedError } from "@/domain/forum/application/use-cases/errors/not-allowed-error";

export interface IChooseQuestionBestAnswerUseCaseRequest {
  questionAuthorId: string;
  answerId: string;
}

export type IChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question;
  }
>;
