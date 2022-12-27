import crypto from "crypto";

export function validatePassword(user, inputPassword) {
  return user.password === userPassword(inputPassword);
}

export const userPassword = (password) => {
  return crypto.pbkdf2Sync(
    password,
    'xxx_)(_xxx',
    1000,
    64,
    'sha512'
  ).toString('hex')
}
