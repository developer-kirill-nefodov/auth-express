import {getLoginSession} from "../../services/auth/session";
import UsersModel from "../../models/user";


export const getUserController = async (req, res) => {
  try {
    const session = await getLoginSession(req);
    const user = await UsersModel.findByPk(session.user.id)

    res.status(200).json({...user.dataValues, password: ''})
  } catch (e) {
    res.status(400).send(e.message);
  }
}
