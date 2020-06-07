import Student from 'entities/Student/student.entity';
import {id_gen} from 'utils/id';
import {hash, password_validate} from 'utils/password';
import {sanitizer} from 'utils/sanitizer';
import {email_validate} from 'utils/email';

export const makeStudent = new Student({id_gen, hash, sanitizer, email_validate, password_validate});

export default makeStudent;