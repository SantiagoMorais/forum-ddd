import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { IAnswerProps } from "@/core/interfaces/answer-props";
import { Optional } from "@/core/types/optional";

export class Answer extends Entity<IAnswerProps> {
  get content() {
    return this.props.content;
  }
  
  get authorId() {
    return this.props.authorId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get questionId() {
    return this.props.questionId;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<IAnswerProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const answer = new Answer({ ...props, createdAt: new Date() }, id);

    return answer;
  }
}
