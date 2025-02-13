import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity-id";
import { IQuestionProps } from "../../core/interfaces/question-props";
import { Optional } from "../../core/types/optional";

export class Question extends Entity<IQuestionProps> {
  static create(
    props: Optional<IQuestionProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const question = new Question({ ...props, createdAt: new Date() }, id);

    return question;
  }
}
