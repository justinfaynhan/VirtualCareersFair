import {IGetCareersFairLanding} from 'interfaces/ICareersFair';

import {ICompanyDbAccess} from 'interfaces/dbaccess';

import {ICompanyEntity} from 'interfaces/entities'

const makeGetCareersFair = (companyDb: ICompanyDbAccess) => {
  const getCareersFair: IGetCareersFairLanding = async () => {
    const all = (await companyDb.findAll());
    return {
      companies: all.map((company) => ({
        id: company._id ? company._id : '',
        name: company.name ? company.name : '',
        logo: company.logo_image ? company.logo_image : '',
        banner_image: company.banner_image ? company.banner_image : '',
        taking_interns: company.taking_interns ? company.taking_interns : null,
        taking_graduates: company.taking_graduates ? company.taking_graduates : null
      }))
    }
  }
  return getCareersFair;
}

export default makeGetCareersFair;