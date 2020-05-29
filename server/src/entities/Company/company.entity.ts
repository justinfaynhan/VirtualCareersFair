import User from 'entities/User/user.entity';
import {IAnalytics} from 'interfaces/ICompany';

export class Company extends User {
  _sanitizer: (text: string) => string;

  _name: string | null;
  _slogan: string | null;
  _overview: string | null;
  _graduate_stories: string | null;
  _website_link: string | null;
  _contact_email: string | null;
  _video: string | null;
  _banner_image: string | null;
  _logo_image: string | null;
  _taking_interns: boolean | null;
  _taking_graduates: boolean | null;
  _page_analytics: Array<IAnalytics> | null;

  constructor(
    id: () => number|string, 
    hash: (password: string) => string, 
    sanitizer: (text: string) => string
  ) {
    super(id, hash);
    this._sanitizer = sanitizer;

    this._name = null;
    this._slogan = null;
    this._overview = null;
    this._graduate_stories = null;
    this._website_link = null;
    this._contact_email = null;
    this._video = null;
    this._banner_image = null;
    this._logo_image = null;
    this._taking_interns = null;
    this._taking_graduates = null;
    this._page_analytics = null;
  }
  get name() {
    return this._name;
  }
  set name(name: string) {

  }
  get slogan() {
    return this._slogan;
  }
  set slogan(slogan: string) {
    
  }
  get overview() {
    return this._overview;
  }
  set overview(text: string) {

  }
  get graduate_stories() {
    return this._graduate_stories;
  }
  set graduate_stories(text: string) {

  }
  get website_link() {
    return this._website_link;
  }
  set website_link(link: string) {

  }
  get contact_email() {
    return this._contact_email;
  }
  set contact_email(email: string) {

  }
  get video() {
    return this._video;
  }
  set video(video: string) {

  }
  get banner_image() {
    return this._banner_image;
  }
  set banner_image(image: string) {

  }
  get logo_image() {
    return this._logo_image;
  }
  set logo_image(image: string) {

  }
  get taking_interns() {
    return this._taking_interns;
  }
  set taking_interns(taking_interns: boolean) {

  }
  get taking_graduates() {
    return this._taking_graduates;
  }
  set taking_graduates(taking_graduates: boolean) {

  }
  get page_analytics() {
    return this._page_analytics;
  }
  set page_analytics(data: Array<IAnalytics>) {

  }
  Make() {

  }
}

export default Company;