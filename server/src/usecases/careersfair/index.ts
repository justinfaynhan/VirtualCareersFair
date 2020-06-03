import makeGetCompany from 'usecases/careersfair/get_company.usecase';
import makeGetCareersFair from 'usecases/careersfair/get_careers_fair.usecases';

import {IGetCareersFairLanding} from 'interfaces/ICareersFair';
import {IGetCompanyInfo} from 'interfaces/ICompany';

import {companyDb} from 'dbaccess'

export const getCareersFair: IGetCareersFairLanding = makeGetCareersFair(companyDb);
export const getCompany: IGetCompanyInfo = makeGetCompany(companyDb);
