import makeGetCareersFairLanding from 'controllers/careersfair/get_careers_fair_landing.controller';
import makeGetCompanyInfo from 'controllers/careersfair/get_company_info.controller';

import {getCareersFair, getCompany} from 'usecases';

const getCareersFairLanding = makeGetCareersFairLanding(getCareersFair);
const getCompanyInfo = makeGetCompanyInfo(getCompany);

const careersFairController = Object.freeze({
  getCareersFairLanding,
  getCompanyInfo
});

export default careersFairController;
export {getCareersFairLanding, getCompanyInfo};