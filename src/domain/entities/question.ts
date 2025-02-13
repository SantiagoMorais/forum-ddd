import { randomUUID } from "node:crypto";
import { IQuestionProps } from "../../core/interfaces/question-props";

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public authorId: string;

  constructor(props: IQuestionProps, id?: string) {
    this.id = id ?? randomUUID();
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
  }
}
