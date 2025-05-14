import { Question } from "@/domain/forum/enterprise/entities/question";
import { Either } from "../either";

export interface ICreateQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

export type ICreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question;
  }
>;
