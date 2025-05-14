import {
  IChooseQuestionBestAnswerUseCaseRequest,
  IChooseQuestionBestAnswerUseCaseResponse,
} from "@/core/interfaces/choose-question-best-answer";
import { AnswersRepository } from "../../repositories/answers-repository";
import { QuestionsRepository } from "../../repositories/questions-repository";

export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository
  ) {}

  async execute({
    answerId,
    questionAuthorId,
  }: IChooseQuestionBestAnswerUseCaseRequest): Promise<IChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);
    if (!answer) throw new Error("Answer not found.");

    const question = await this.questionsRepository.findById(
      answer.questionId.toValue()
    );
    if (!question) throw new Error("Question not found.");

    if (questionAuthorId !== question.authorId.toValue())
      throw new Error("Not allowed.");

    question.bestAnswerId = answer.id;
    await this.questionsRepository.save(question);
    return { question };
  }
}
