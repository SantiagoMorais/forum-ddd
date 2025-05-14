import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public questions: Question[] = [];

  async create(question: Question): Promise<void> {
    this.questions.push(question);
  }

  async findBySlug(slug: string): Promise<Question | null> {
    const question = this.questions.find(
      (question) => question.slug.value === slug
    );
    if (!question) return null;
    return question;
  }

  async delete(question: Question): Promise<void> {
    const questionIndex = this.questions.findIndex((q) => q.id === question.id);
    this.questions.splice(questionIndex, 1);
  }

  async findById(id: string): Promise<Question | null> {
    const question = this.questions.find((q) => q.id.toString() === id);
    if (!question) return null;
    return question;
  }
}
