import { AggregateRoot } from "@/core/entities/aggregate-root";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { IQuestionProps } from "@/core/interfaces/question-props";
import { Optional } from "@/core/types/optional";
import dayjs from "dayjs";
import { Slug } from "./value-objects/slug";
import { QuestionAttachment } from "./question-attachment";

export class Question extends AggregateRoot<IQuestionProps> {
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

  get attachments() {
    return this.props.attachments;
  }

  get isNew(): boolean {
    return dayjs().diff(this.createdAt, "days") <= 3; // verify if the question was created at most in three days.
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  set title(title: string) {
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);
    this.touch();
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId | undefined) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }

  set attachments(attachments: Array<QuestionAttachment>) {
    this.props.attachments = attachments;
  }

  static create(
    props: Optional<IQuestionProps, "createdAt" | "slug" | "attachments">,
    id?: UniqueEntityId
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        attachments: props.attachments ?? [],
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return question;
  }
}
