import Student from 'entities/Student/student.entity';
import {id_generator} from 'utils/id';
import {hash} from 'utils/hash';
import {sanitizer} from 'utils/sanitizer';

export const makeStudent = new Student(id_generator, hash, sanitizer);

export default makeStudent;