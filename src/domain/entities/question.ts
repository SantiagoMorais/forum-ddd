import { Entity } from "../../core/entities/entity";
import { IQuestionProps } from "../../core/interfaces/question-props";

export class Question extends Entity {
  constructor(props: IQuestionProps, id?: string) {
    super(props, id);
  }
}
