import passport from "passport";
import {Strategy as LocalStrategy} from 'passport-local';

import {findUserEmail} from "../services/users";
import {validatePassword} from "../helpers/user";
import UsersModel from "../models/user";

passport.use(
  new LocalStrategy(({
      usernameField: 'email',
      passwordField: 'password'
    }), async (email, password, done) => {
      try {
        const user = await findUserEmail(email)

        if (user && validatePassword(user, password)) {
          done(null, {...user.dataValues, password: ''})
        } else {
          done(null, false, 'Invalid username and password combination')
        }
      } catch (e) {
        done(null, false, e.message);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UsersModel.findByPk(id);
  if (!user) {
    done('error', false);
  }
  done(null, {...user.dataValues, password: ''});
});

export default passport;
