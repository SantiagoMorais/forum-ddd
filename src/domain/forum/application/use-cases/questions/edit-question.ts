import {
  IEditQuestionUseCaseRequest,
  IEditQuestionUseCaseResponse,
} from "@/core/interfaces/edit-question-use-case";
import { QuestionsRepository } from "../../repositories/questions-repository";

export class EditQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    title,
  }: IEditQuestionUseCaseRequest): Promise<IEditQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) throw new Error("Question not found.");
    if (authorId !== question.authorId.toValue())
      throw new Error("Not allowed");

    question.title = title;
    question.content = content;

    await this.questionsRepository.save(question);
    return {};
  }
}
