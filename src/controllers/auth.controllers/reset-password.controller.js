import {promisify} from "util";

import {redis} from "../../db";
import {findUserEmail, updateUserById} from "../../services/users";

export const resetPasswordController = async (req, res) => {
  try {
    const token = await promisify(redis.get).bind(redis)(req.body.reset);
    const user = await findUserEmail(token);

    if(!user) {
      res.status(200).json({
        message: 'error update password',
        redirect: '/login'
      });
    } else {
      await updateUserById(user.id, {password: req.body.password});

      res.status(200).json({
        message: 'success updated password',
        redirect: '/login'
      });
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
}