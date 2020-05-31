import User, {IUserConstructor} from 'entities/User/user.entity';
import {IStudentEntity} from 'interfaces/entities/IStudent.entity';

export interface IStudentConstructor extends IUserConstructor {
  sanitizer: (text: string) => string;
}
export class Student extends User {
  private _sanitizer: (text: string) => string;

  private _first_name: string | null;
  private _last_name: string | null;
  private _about: string | null;
  private _skills: Array<string> | null;
  private _uni: string | null;
  private _degree: string | null;
  private _resume_link?: string | null;
  private _linkedin_link?: string | null;
  private _github_link?: string | null;
  private _portfolio_link?: string | null;

  constructor(args: IStudentConstructor) {
    super({id_gen: args.id_gen, hash: args.hash, email_validate: args.email_validate});
    this._sanitizer = args.sanitizer;

    this._first_name = null;
    this._last_name = null;
    this._about = null;
    this._skills = null;
    this._uni = null;
    this._degree = null;
    this._resume_link = null;
    this._linkedin_link = null;
    this._github_link = null;
    this._portfolio_link = null;
  }
  get first_name() {
    return this._first_name;
  }
  get last_name() {
    return this._last_name;
  }
  get about() {
    return this._about;
  }
  get skills() {
    return this._skills;
  }
  get uni() {
    return this._uni;
  }
  get degree() {
    return this._degree;
  }
  get resume_link() {
    return this._resume_link;
  }
  get linkedin_link() {
    return this._linkedin_link;
  }
  get github_link() {
    return this._github_link;
  }
  get portfolio_link() {
    return this._portfolio_link;
  }
  async Make(data: Omit<IStudentEntity, '_id'|'created_at'|'updated_at'>) {
    if (this._email_validate(data.email)) {
      this._email = data.email;
    } else {
      throw new Error(`Error, '${data.email}' is an invalid email address.`)
    }
    try {
      this._password = await this._hash(data.password);
    } catch {
      throw new Error(`Error, failed to hash ${data.password}.`)
    }
    this._first_name = this._sanitizer(data.first_name);
    this._last_name = this._sanitizer(data.last_name);
    this._about = this._sanitizer(data.about);
    this._skills = data.skills.map((skill) => this._sanitizer(skill));
    this._uni = this._sanitizer(data.uni);
    this._degree = this._sanitizer(data.degree);
    this._resume_link = this._sanitizer(data.resume_link);
    this._linkedin_link = this._sanitizer(data.linkedin_link);
    this._github_link = this._sanitizer(data.github_link);
    this._portfolio_link = this._sanitizer(data.portfolio_link);
  }

}

export default Student;