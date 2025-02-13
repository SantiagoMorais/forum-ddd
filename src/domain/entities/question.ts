import { Entity } from "../../core/entities/entity";
import { IQuestionProps } from "../../core/interfaces/question-props";
import { Slug } from "./value-objects/slug";

export class Question extends Entity {
  public title: string;
  public content: string;
  public slug: Slug;
  public authorId: string;

  constructor(props: IQuestionProps, id?: string) {
    super(id);

    this.title = props.title;
    this.content = props.content;
    this.slug = props.slug;
    this.authorId = props.authorId;
  }
}
