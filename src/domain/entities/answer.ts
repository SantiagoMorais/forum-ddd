import { Entity } from "../../core/entities/entity";
import { IAnswerProps } from "../../core/interfaces/answer-props";

export class Answer extends Entity {
  constructor(props: IAnswerProps, id?: string) {
    super(props, id);
  }
}
