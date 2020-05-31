export interface IBaseConstructor {
  id_gen: () => string;
}
export class Base {
  protected _id_gen: () => string;

  protected _id: string | null;
  protected _created_at: Date | string | number | null;
  protected _updated_at: Date | string | number | null;
  constructor(args: IBaseConstructor) {
    this._id_gen = args.id_gen;

    this._id = this._id_gen();
    this._created_at = new Date().toISOString();
    this._updated_at = new Date().toISOString();
  }

  Make({}: any) {
    throw new Error('Make method not implemented.');
  }
}

export default Base;