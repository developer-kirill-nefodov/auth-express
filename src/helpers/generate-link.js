import crypto from "crypto";

export const generateLink = () => {
  return crypto.randomBytes(50).toString('base64');
}