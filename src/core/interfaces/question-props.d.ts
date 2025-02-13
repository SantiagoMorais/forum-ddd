import { Slug } from "../../domain/entities/value-objects/slug";

export interface IQuestionProps {
  authorId: string;
  content: string;
  slug: Slug; // A representation of the question title, without accents and special characters
  title: string;
}
