import Company from 'entities/Company/company.entity';
import {id_gen, id_check} from 'utils/id';
import {hash, password_validate} from 'utils/password';
import {sanitizer} from 'utils/sanitizer';
import {email_validate} from 'utils/email';

export const makeCompany = new Company({id_gen, id_check, hash, email_validate, sanitizer, password_validate});

export default makeCompany;



