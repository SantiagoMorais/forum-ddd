import { randomUUID } from "node:crypto";

export class Entity {
  private _id: string;
  protected props: any;

  get id() {
    return this._id;
  }

  constructor(props: any, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }
}
