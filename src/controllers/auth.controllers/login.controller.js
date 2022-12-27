import passport from "passport";

export const loginController = async (req, res, next) => {
  try {
    passport.authenticate('local', {session: true}, (err, user, message) => {
      if (err) {
        res.status(401).send(err.message);
        return
      }
      if (!user) {
        res.status(401).send(message);
        return;
      }
      req.logIn(user, function (err) {
        if (err) {
          res.status(400).send(err.message)
        } else {
          res.status(200).json({
            redirect: '/',
            message: 'success login',
            user: user.dataValues
          });
        }
      })
    })(req, res, next)
  } catch (e) {
    res.status(401).send(e.message);
  }
}