import * as EmailValidator from 'email-validator';

export const validate = (email: string) => {
  return EmailValidator.validate(email);
};

export default validate;