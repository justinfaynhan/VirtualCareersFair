import User from 'entities/User/user.entity';

export class Student extends User {
  _sanitizer: (text: string) => string;

  _first_name: string | null;
  _last_name: string | null;
  _about: string | null;
  _skills: string | null;
  _uni: string | null;
  _degree: string | null;
  _resume_link?: string | null;
  _linkedin_link?: string | null;
  _github_link?: string | null;
  _portfolio_link?: string | null;

  constructor(
    id: () => number|string, 
    hash: (password: string) => string, 
    sanitizer: (text: string) => string
  ) {
    super(id, hash);
    this._sanitizer = sanitizer;

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
  set first_name(first_name: string) {

  }
  get last_name() {
    return this._last_name;
  }
  set last_name(last_name: string) {

  }
  get about() {
    return this._about;
  }
  set about(about: string) {

  }
  get skills() {
    return this._skills;
  }
  set skills(skills: string) {

  }
  get uni() {
    return this._uni;
  }
  set uni(uni: string) {

  }
  get degree() {
    return this._degree;
  }
  set degree(degree: string) {

  }
  get resume_link() {
    return this._resume_link;
  }
  set resume_link(link: string) {

  }
  get linkedin_link() {
    return this._linkedin_link;
  }
  set linkedin_link(link: string) {

  }
  get github_link() {
    return this._github_link;
  }
  set github_link(link: string) {

  }
  get portfolio_link() {
    return this._portfolio_link;
  }
  set portfolio_link(link: string) {

  }
  Make() {

  }
}

export default Student;