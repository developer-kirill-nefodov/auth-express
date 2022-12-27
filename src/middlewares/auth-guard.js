import {getLoginSession} from "../services/auth/session";

export const authGuard = async (req, res, next) => {
  try {
    const session = await getLoginSession(req);

    if(session.error === 401) {
      res.status(401).send("user is not authorized");
      return;
    }

    if(session.error) {
      res.status(400).send(session.message);
    }

    if(session.user) {
      next();
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
}
