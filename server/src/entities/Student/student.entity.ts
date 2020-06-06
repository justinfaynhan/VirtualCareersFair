import User, {IUserConstructor} from 'entities/User/user.entity';
import {IStudentEntity, IStudentEntityMakeArgs} from 'interfaces/entities/IStudent.entity';

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
  }: IStudentEntityMakeArgs) {
    if (email) {
      if (this._email_validate(email)) {
        this._email = email;
      } else {
        throw new Error(`Error, '${email}' is an invalid email address.`)
      }
    } else {
      this._email = null;
    }

    if (password) {
      try {
        this._password = await this._hash(password);
      } catch {
        throw new Error(`Error, failed to hash ${password}.`)
      }
    } else {
      this._password = null;
    }

    this._first_name = first_name ? this._sanitizer(first_name) : null;
    this._last_name = last_name ? this._sanitizer(last_name) : null;
    this._about = about ? this._sanitizer(about) : null;
    this._skills = skills ? skills.map((skill) => this._sanitizer(skill)) : null;
    this._uni = uni ? this._sanitizer(uni) : null;
    this._degree = degree ? this._sanitizer(degree) : null;
    this._resume_link = resume_link ? this._sanitizer(resume_link) : null;
    this._linkedin_link = linkedin_link ? this._sanitizer(linkedin_link) : null;
    this._github_link = github_link ? this._sanitizer(github_link) : null;
    this._portfolio_link = portfolio_link ? this._sanitizer(portfolio_link) : null;
    return {
      _id: this._id,
      created_at: this._created_at,
      updated_at: this._updated_at,
      email: this._email,
      password: this._password,
      first_name: this._first_name,
      last_name: this._last_name,
      about: this._about,
      skills: this._skills,
      uni: this._uni,
      degree: this._degree,
      resume_link: this._resume_link,
      linkedin_link: this._linkedin_link,
      github_link: this._github_link,
      portfolio_link: this._portfolio_link
    } as IStudentEntity;  
  }
}

export default Student;