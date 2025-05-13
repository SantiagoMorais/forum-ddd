import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({ slug }: { slug: string }): Promise<{ question: Question }> {
    const question = await this.questionsRepository.findBySlug(slug);
    if (!question) throw new Error("Question not found.");
    return { question };
  }
}
