import {IGetCompanyInfo} from 'interfaces/ICompany';

import {ICompanyDbAccess} from 'interfaces/dbaccess';

const makeGetCompany = (companyDb: ICompanyDbAccess) => {
  const getCompany: IGetCompanyInfo = async (id) => {
    // working
    const company = await companyDb.findById({_id: id});
    if (company === null) {
      throw new Error(`Error, could not find company with id ${id}.`);
    }
    return {
      id,
      email: company.email ? company.email : '',
      name: company.name ? company.name : undefined,
      slogan: company.slogan ? company.slogan : undefined,
      overview: company.overview ? company.overview : undefined,
      graduate_stories: company.graduate_stories ? company.graduate_stories : [],
      videos: company.video ? company.video : undefined,
      website: company.website_link ? company.website_link : undefined,
      contact_info: company.contact_email ? company.contact_email : undefined
    }
    // return {
    //   id: 'sadsadsadsa',
    //   name: 'jojo',
    //   slogan: 'your next move is',
    //   overview: 'bizzare adventures',
    //   graduate_stories: [{
    //     name: 'Johnny',
    //     role: 'CEO',
    //     summary: 'SWAG goes miles',
    //     story: 'once upon a time...'
    //   }],
    //   videos: 'www.youtube.com',
    //   website: 'www.google.com',
    //   contact_info: 'contact@google.com'
    // };
  }
  return getCompany;
}

export default makeGetCompany;