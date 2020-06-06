import {IGetCareersFairLanding} from 'interfaces/ICareersFair';

import {ICompanyDbAccess} from 'interfaces/dbaccess';

import {ICompanyEntity} from 'interfaces/entities'

const makeGetCareersFair = (companyDb: ICompanyDbAccess) => {
  const getCareersFair: IGetCareersFairLanding = async () => {
    // working
    const all = (await companyDb.findAll());
    return {
      companies: all.map((company) => ({
        id: company._id ? company._id : '',
        name: company.name ? company.name : undefined,
        logo: company.logo_image ? company.logo_image : undefined,
        banner_image: company.banner_image ? company.banner_image : undefined,
        taking_interns: company.taking_interns ? company.taking_interns : undefined,
        taking_graduates: company.taking_graduates ? company.taking_graduates : undefined
      }))
    }
    // return {
    //   companies: [{
    //     id: 'sadno321432131',
    //     name: 'Hi .Co',
    //     logo: 'pic.png',
    //     banner_image: 'pic.png',
    //     taking_interns: true,
    //     taking_graduates: true
    //   }]
    // }
  }
  return getCareersFair;
}

export default makeGetCareersFair;