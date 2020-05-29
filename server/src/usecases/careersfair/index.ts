import makeGetCompany from 'usecases/careersfair/get_company.usecase';
import makeGetCareersFair from 'usecases/careersfair/get_careers_fair.usecases';

import {IGetCareersFairLanding} from 'interfaces/ICareersFair';
import {IGetCompanyInfo} from 'interfaces/ICompany';

export const getCareersFair: IGetCareersFairLanding = makeGetCareersFair(null);
export const getCompany: IGetCompanyInfo = makeGetCompany(null);
