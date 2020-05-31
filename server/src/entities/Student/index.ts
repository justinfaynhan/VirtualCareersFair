import Student from 'entities/Student/student.entity';
import {id_gen} from 'utils/id';
import {hash} from 'utils/hash';
import {sanitizer} from 'utils/sanitizer';
import {validate} from 'utils/email';

export const makeStudent = new Student({id_gen, hash, sanitizer, email_validate: validate});

export default makeStudent;