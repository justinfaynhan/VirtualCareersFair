import {IGetCompanyInfo} from 'interfaces/ICompany';

import {ICompanyDbAccess} from 'interfaces/dbaccess';

const makeGetCompany = (companyDb: ICompanyDbAccess) => {
  const getCompany: IGetCompanyInfo = async (id) => {
    const company = await companyDb.findById({_id: id});
    if (company === null) {
      throw new Error(`Error, could not find company with id ${id}.`);
    }
    return {
      id,
      email: company.email ? company.email : '',
      name: company.name ? company.name : '',
      slogan: company.slogan ? company.slogan : '',
      overview: company.overview ? company.overview : '',
      graduate_stories: company.graduate_stories ? company.graduate_stories : [],
      videos: company.video ? company.video : '',
      website: company.website_link ? company.website_link : '',
      contact_info: company.contact_email ? company.contact_email : ''
    }
  }
  return getCompany;
}

export default makeGetCompany;