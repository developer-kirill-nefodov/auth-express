import {getLoginSession} from "../services/auth/session";

export const questGuard = async (req, res, next) => {
  try {
    const session = await getLoginSession(req);

    if (session.user) {
      res.status(400).send('only for non-authorized');
    } else {
      next()
    }
  } catch (e) {
   res.status(400).send(e.message);
  }
}
