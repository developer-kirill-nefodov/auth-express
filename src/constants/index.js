const LIFETIME_EMAIL = Number(process.env.LIFETIME_EMAIL);
export const MAX_AGE_EMAIL = Number.isNaN(LIFETIME_EMAIL) ? 60 * 15 : LIFETIME_EMAIL || 60 * 15;

export const MESSAGE_EMAIL =
  `A link to reset your password has been sent to your email \n 
  Best before date - ${Math.round(MAX_AGE_EMAIL / 60)} (min)`