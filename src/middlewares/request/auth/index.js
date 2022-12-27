import {forgotSchema, loginSchema, resetSchema} from "../../validator/auth.schema";

export const loginRequestMiddleware = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const forgotRequestMiddleware = async (req, res, next) => {
  try {
    await forgotSchema.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export const resetRequestMiddleware = async (req, res, next) => {
  try {
    await resetSchema.validateAsync(req.body);

    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
}
