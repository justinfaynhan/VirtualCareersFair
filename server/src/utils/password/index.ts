import bcrypt from 'bcrypt';

import config from 'config';

export const hash = async (plaintext: string) => {
  try {
    return await (bcrypt.hash(plaintext, config.AUTH.salt_rounds));
  } catch {
    throw new Error(`Error, failed to hash plaintext ${plaintext}.`);
  }
}

export const check = async (plaintext: string, hash: string) => {
  try {
    return bcrypt.compare(plaintext, hash)
  } catch {
    throw new Error(`Error, failed to check '${plaintext}' with hash '${hash}'.`);
  }
}

export const password_validate = (password: string) => {
  return password.length >= 12;
}

export default hash;