import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository";
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public comments: AnswerComment[] = [];

  async create(answerComment: AnswerComment) {
    this.comments.push(answerComment);
  }

  async findById(id: string): Promise<AnswerComment | null> {
    const answerComment = this.comments.find(
      (comment) => comment.id.toValue() === id
    );
    if (!answerComment) return null;
    return answerComment;
  }

  async delete(answerComment: AnswerComment): Promise<void> {
    const commentIndex = this.comments.findIndex(
      (comment) => comment.id === answerComment.id
    );
    this.comments.splice(commentIndex, 1);
  }
}
