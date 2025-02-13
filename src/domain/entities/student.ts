import { Entity } from "../../core/entities/entity";
import { IStudentProps } from "../../core/interfaces/student-props";

export class Student extends Entity {
  public name: string;

  constructor(props: IStudentProps, id?: string) {
    super(id);
    
    this.name = props.name;
  }
}
