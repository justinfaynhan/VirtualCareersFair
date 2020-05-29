import Company from 'entities/Company/company.entity';
import {id_generator} from 'utils/id';
import {hash} from 'utils/hash';
import {sanitizer} from 'utils/sanitizer';

export const makeCompany = new Company(id_generator, hash, sanitizer);

export default makeCompany;