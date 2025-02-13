import { Entity } from "../../core/entities/entity";
import { IInstructorProps } from "../../core/interfaces/instructor-props";

export class Instructor extends Entity {
  constructor(props: IInstructorProps, id?: string) {
    super(props, id);
  }
}
