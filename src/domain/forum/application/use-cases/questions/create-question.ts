import {
  ICreateQuestionUseCaseRequest,
  ICreateQuestionUseCaseResponse,
} from "@/core/interfaces/create-question-use-case";
import { Question } from "../../../enterprise/entities/question";
import { QuestionsRepository } from "../../repositories/questions-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { right } from "@/core/either";
import { QuestionAttachment } from "@/domain/forum/enterprise/entities/question-attachment";
import { QuestionAttachmentList } from "@/domain/forum/enterprise/entities/question-attachment-list";

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
    attachmentsIds,
  }: ICreateQuestionUseCaseRequest): Promise<ICreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityId(authorId),
      content,
      title,
    });

    const questionAttachments = attachmentsIds.map((attachmentId) => {
      return QuestionAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        questionId: question.id,
      });
    });

    question.attachments = new QuestionAttachmentList(questionAttachments);

    await this.questionsRepository.create(question);
    return right({ question });
  }
}
