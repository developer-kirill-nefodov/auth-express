import {serialize} from 'cookie';

const TOKEN_NAME = process.env.TOKEN;
const LIFETIME = Number(process.env.LIFETIME_SESSION);

export const MAX_AGE_SESSION = Number.isNaN(LIFETIME) ? 60 * 60 * 24 : LIFETIME || 60 * 60 * 24;

export function removeTokenCookie() {
  return serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  })
}