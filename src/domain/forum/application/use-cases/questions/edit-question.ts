import {
  IEditQuestionUseCaseRequest,
  IEditQuestionUseCaseResponse,
} from "@/core/interfaces/edit-question-use-case";
import { QuestionsRepository } from "../../repositories/questions-repository";
import { left, right } from "@/core/either";
import { ResourceNotFoundError } from "../errors/resource-not-found-error";
import { NotAllowedError } from "../errors/not-allowed-error";

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    title,
  }: IEditQuestionUseCaseRequest): Promise<IEditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question)
      return left(new ResourceNotFoundError("Question not found."));
    if (authorId !== question.authorId.toValue())
      return left(new NotAllowedError("Not allowed"));

    question.title = title;
    question.content = content;

    await this.questionsRepository.save(question);
    return right({ question });
  }
}
