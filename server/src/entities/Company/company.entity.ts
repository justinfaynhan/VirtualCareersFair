import User, { IUserConstructor } from 'entities/User/user.entity';
import {IAnalytics, IGraduateStory} from 'interfaces/ICompany';
import {ICompanyEntity} from 'interfaces/entities/ICompany.entity';

export interface ICompanyConstructor extends IUserConstructor {
  sanitizer: (text: string) => string;
  id_check: (id: string) => boolean;
}
export class Company extends User {
  private _sanitizer: (text: string) => string;
  private _id_check: (id: string) => boolean;

  private _name: string | null;
  private _slogan: string | null;
  private _overview: string | null;
  private _graduate_stories: Array<IGraduateStory> | null;
  private _website_link: string | null;
  private _contact_email: string | null;
  private _video: string | null;
  private _banner_image: string | null;
  private _logo_image: string | null;
  private _taking_interns: boolean | null;
  private _taking_graduates: boolean | null;
  private _page_analytics: Array<IAnalytics> | null;

  constructor(args: ICompanyConstructor) {
    super({hash: args.hash, email_validate: args.email_validate, id_gen: args.id_gen});
    this._sanitizer = args.sanitizer;
    this._id_check = args.id_check;

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
  get slogan() {
    return this._slogan;
  }
  get overview() {
    return this._overview;
  }
  get graduate_stories() {
    return this._graduate_stories;
  }
  get website_link() {
    return this._website_link;
  }
  get contact_email() {
    return this._contact_email;
  }
  get video() {
    return this._video;
  }
  get banner_image() {
    return this._banner_image;
  }
  get logo_image() {
    return this._logo_image;
  }
  get taking_interns() {
    return this._taking_interns;
  }
  get taking_graduates() {
    return this._taking_graduates;
  }
  get page_analytics() {
    return this._page_analytics;
  }
  async Make({
    email,
    password,
    name,
    slogan,
    overview,
    graduate_stories,
    website_link,
    contact_email,
    video,
    banner_image,
    logo_image,
    taking_interns,
    taking_graduates,
    page_analytics
  }: Omit<ICompanyEntity, '_id'|'created_at'|'updated_at'>) {
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

    this._name = this._sanitizer(name);
    this._slogan = this._sanitizer(slogan);

    this._overview = this._sanitizer(overview);
    this._graduate_stories = graduate_stories.map((story) => ({
      name: this._sanitizer(story.name),
      role: this._sanitizer(story.role),
      summary: this._sanitizer(story.summary),
      story: this._sanitizer(story.story)
    }));
    this._website_link = this._sanitizer(website_link);
    this._contact_email = this._sanitizer(contact_email);
    this._video = this._sanitizer(video);
    this._banner_image = this._sanitizer(banner_image);
    this._logo_image = this._sanitizer(logo_image);
    this._taking_interns = taking_interns;
    this._taking_graduates = taking_graduates;
    // page_analytics.forEach((analytic) => {
    //   if (!this._id_check(analytic.id)) {
    //     throw new Error(`Error, found invalid id ${analytic.id} when setting ${name} page analytics.`);
    //   }
    // })
    this._page_analytics = page_analytics;
    return this;
  }
}

export default Company;