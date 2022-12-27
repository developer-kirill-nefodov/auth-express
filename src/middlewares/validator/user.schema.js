import Joi from "joi";

export const updateUserSchema = Joi.object({
  id: Joi.number()
    .required(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string()
    .email({minDomainSegments: 2})
    .max(42),
  password: Joi.string()
    .min(4)
    .max(255),
  message: Joi.string()
});