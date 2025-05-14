import {
  ICommentOnQuestionUseCaseRequest,
  ICommentOnQuestionUseCaseResponse,
} from "@/core/interfaces/comment-on-question-use-case";
import { QuestionCommentsRepository } from "../../repositories/question-comments-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { QuestionsRepository } from "../../repositories/questions-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export class CommentOnQuestionUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private questionCommentsRepository: QuestionCommentsRepository
  ) {}

  async execute({
    authorId,
    questionId,
    content,
  }: ICommentOnQuestionUseCaseRequest): Promise<ICommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) throw new Error("Question not found.");

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
      content,
    });

    await this.questionCommentsRepository.create(questionComment);

    return { questionComment };
  }
}
