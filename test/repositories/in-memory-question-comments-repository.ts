import { QuestionCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  public comments: QuestionComment[] = [];

  async create(questionComment: QuestionComment) {
    this.comments.push(questionComment);
  }

  async findById(id: string): Promise<QuestionComment | null> {
    const questionComment = this.comments.find(
      (comment) => comment.id.toValue() === id
    );
    if (!questionComment) return null;
    return questionComment;
  }

  async delete(questionComment: QuestionComment): Promise<void> {
    const commentIndex = this.comments.findIndex(
      (comment) => comment.id === questionComment.id
    );
    this.comments.splice(commentIndex, 1);
  }
}
