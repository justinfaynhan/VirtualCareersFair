import Base from 'entities/base.entity';

export class Info extends Base{
  _sanitizer: (text: string) => string;

  _about_us: string | null;
  _student_instructions: string | null;
  _company_instructions: string | null;
  _admin_instructions: string | null;

  constructor(
    sanitizer: (text: string) => string
  ) {
    super();
    this._sanitizer = sanitizer;
    this._about_us = null;
    this._student_instructions = null;
    this._company_instructions = null;
    this._admin_instructions = null;
  }
  get about_us() {
    return this._about_us;
  }
  set about_us(text: string) {

  }
  get student_instructions() {
    return this._student_instructions;
  }
  set student_instructions(text: string) {

  }
  get company_instructions() {
    return this._company_instructions;
  }
  set company_instructions(text: string) {

  }
  get admin_instructions() {
    return this._admin_instructions;
  }
  set admin_instructions(text: string) {

  }
  Make() {

  }
}

export default Info;