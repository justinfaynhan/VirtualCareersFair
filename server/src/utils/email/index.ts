import * as EmailValidator from 'email-validator';

export const email_validate = (email: string) => {
  return EmailValidator.validate(email);
};

export default email_validate;