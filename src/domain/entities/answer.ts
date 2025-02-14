import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { IAnswerProps } from "@/core/interfaces/answer-props";
import { Optional } from "@/core/types/optional";

export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content;
  }

  static create(
    props: Optional<IAnswerProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const answer = new Answer({ ...props, createdAt: new Date() }, id);

    return answer;
  }
}
