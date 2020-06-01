import {Base} from 'db/base';

export const User = {
  ...Base,
  email: {type: String, required: true, index: true, dropDups: true},
  password: {type: String, required: true},
}