import { Entity } from "../../core/entities/entity";
import { IInstructorProps } from "../../core/interfaces/instructor-props";

export class Instructor extends Entity {
  public name: string;

  constructor(props: IInstructorProps, id?: string) {
    super(id);

    this.name = props.name;
  }
}
