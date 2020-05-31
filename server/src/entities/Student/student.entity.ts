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
  async Make({
    email, 
    password, 
    first_name, 
    last_name, 
    about, 
    skills, 
    uni, 
    degree, 
    resume_link, 
    linkedin_link, 
    github_link, 
    portfolio_link
  }: Omit<IStudentEntity, '_id'|'created_at'|'updated_at'>) {
    if (this._email_validate(email)) {
      this._email = email;
    } else {
      throw new Error(`Error, '${email}' is an invalid email address.`)
    }
    try {
      this._password = await this._hash(password);
    } catch {
      throw new Error(`Error, failed to hash ${password}.`)
    }
    this._first_name = this._sanitizer(first_name);
    this._last_name = this._sanitizer(last_name);
    this._about = this._sanitizer(about);
    this._skills = skills.map((skill) => this._sanitizer(skill));
    this._uni = this._sanitizer(uni);
    this._degree = this._sanitizer(degree);
    this._resume_link = this._sanitizer(resume_link);
    this._linkedin_link = this._sanitizer(linkedin_link);
    this._github_link = this._sanitizer(github_link);
    this._portfolio_link = this._sanitizer(portfolio_link);
    return this;
  }

}

export default Student;