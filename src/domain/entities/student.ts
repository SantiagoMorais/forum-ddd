import { Entity } from "../../core/entities/entity";
import { IStudentProps } from "../../core/interfaces/student-props";

export class Student extends Entity {
  constructor(props: IStudentProps, id?: string) {
    super(props, id);
  }
}
