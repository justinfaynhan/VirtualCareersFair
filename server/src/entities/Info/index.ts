import Info from 'entities/Info/info.entity';
import {sanitizer} from 'utils/sanitizer';

export const makeInfo = new Info(sanitizer);

export default makeInfo;