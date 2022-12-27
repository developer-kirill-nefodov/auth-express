import {updateUserSchema} from "../../validator/user.schema";

export const updateUserRequestMiddleware = async (req, res, next) => {
  try {
    await updateUserSchema.validateAsync(req.body);

    next();
  } catch (e) {
   res.status(400).send(e.message);
  }
}
