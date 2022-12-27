import {forgotPasswordService} from "../../services/auth/forgotPasswordService";
import {findUserEmail} from "../../services/users";
import {MESSAGE_EMAIL} from "../../constants";

export const forgotPasswordController = async (req, res) => {
  try {
    const email = req.body.email;

    const user = await findUserEmail(email);

    if (user) {
      await forgotPasswordService(process.env.FRONT_URL + '/reset-password?secret-key=', email);
    }
    res.status(200).json({message: MESSAGE_EMAIL});
  } catch (e) {
    res.status(400).send(e.message);
  }
}