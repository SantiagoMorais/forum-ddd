import { Entity } from "../../core/entities/entity";
import { IAnswerProps } from "../../core/interfaces/answer-props";

export class Answer extends Entity {
  public content: string;
  public authorId: string;
  public questionId: string;

  constructor(props: IAnswerProps, id?: string) {
    super(id);

    this.content = props.content;
    this.authorId = props.authorId;
    this.questionId = props.questionId;
  }
}
