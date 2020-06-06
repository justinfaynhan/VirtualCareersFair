import Company from 'entities/Company/company.entity';
import {id_gen, id_check} from 'utils/id';
import {hash} from 'utils/hash';
import {sanitizer} from 'utils/sanitizer';
import {validate} from 'utils/email';

export const makeCompany = new Company({id_gen, id_check, hash, email_validate: validate, sanitizer});

export default makeCompany;



