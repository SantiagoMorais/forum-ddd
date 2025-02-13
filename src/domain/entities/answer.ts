import { randomUUID } from "node:crypto";
import { IAnswerProps } from "../../core/interfaces/answer-props";

export class Answer {
  public id: string;
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(props: IAnswerProps, id?: string) {
    this.content = props.content;
    this.authorId = props.authorId;
    this.questionId = props.questionId;
    this.id = id ?? randomUUID();
  }
}
