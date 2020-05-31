import Info from 'entities/Info/info.entity';
import {sanitizer} from 'utils/sanitizer';
import {id_gen} from 'utils/id';

export const makeInfo = new Info({sanitizer, id_gen});

export default makeInfo;