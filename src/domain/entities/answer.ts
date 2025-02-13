import { Entity } from "../../core/entities/entity";
import { IAnswerProps } from "../../core/interfaces/answer-props";

export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content;
  }
}
