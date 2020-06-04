export interface IBaseConstructor {
  id_gen: () => string;
}
export class Base {
  protected _id_gen: () => string;

  protected _id: string;
  protected _created_at: Date | string | number;
  protected _updated_at: Date | string | number;
  constructor(args: IBaseConstructor) {
    this._id_gen = args.id_gen;

    this._id = this._id_gen();
    this._created_at = new Date().toISOString();
    this._updated_at = new Date().toISOString();
  }
  get id() {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }
  get created_at() {
    return this._created_at;
  }
  get updated_at() {
    return this._updated_at;
  }
  Make({}: any) {
    throw new Error('Make method not implemented.');
  }
}

export default Base;