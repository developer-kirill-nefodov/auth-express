import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({minDomainSegments: 2})
    .max(42)
    .required(),
  password: Joi.string()
    .min(4)
    .max(255)
    .required()
});

export const forgotSchema = Joi.object({
  email: Joi.string()
    .email({minDomainSegments: 2})
    .max(42)
    .required()
});

export const resetSchema = Joi.object({
  reset: Joi.string()
    .min(40)
    .max(100)
    .required(),
  password: Joi.string()
    .min(4)
    .max(255)
    .required()
});