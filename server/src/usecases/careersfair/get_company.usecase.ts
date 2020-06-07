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
      email: company.email,
      name: company.name,
      slogan: company.slogan,
      overview: company.overview,
      graduate_stories: company.graduate_stories,
      video: company.video,
      website: company.website_link,
      contact_info: company.contact_email,
      banner_image: company.banner_image,
      logo_image: company.logo_image,
      taking_interns: company.taking_interns,
      taking_graduates: company.taking_graduates
    }
  }
  return getCompany;
}

export default makeGetCompany;