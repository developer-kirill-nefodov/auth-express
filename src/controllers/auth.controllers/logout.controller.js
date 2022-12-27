import {removeTokenCookie} from "../../services/auth/auth-cookies";

export const logoutController = async (req, res) => {
  try {
    req.logout(() => {
      res.status(200)
        .setHeader('Set-Cookie', removeTokenCookie())
        .json({message: 'success logout'});
    });
    req.session.destroy();
  } catch (e) {
    res.status(400).send(e.message);
  }
}