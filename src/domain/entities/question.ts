import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { IQuestionProps } from "@/core/interfaces/question-props";
import { Optional } from "@/core/types/optional";
import dayjs from "dayjs";

export class Question extends Entity<IQuestionProps> {
  get content() {
    return this.props.content;
  }

  get authorId() {
    return this.props.authorId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get title() {
    return this.props.title;
  }

  get slug() {
    return this.props.slug;
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, "days") <= 3; // verify if the question was created at most in three days.
  }

  static create(
    props: Optional<IQuestionProps, "createdAt">,
    id?: UniqueEntityId
  ) {
    const question = new Question({ ...props, createdAt: new Date() }, id);

    return question;
  }
}
