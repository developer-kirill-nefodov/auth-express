import 'dotenv/config';
import express from "express";
import session from 'express-session';
import bodyParser from "body-parser";
import cors from 'cors';
import connectRedis from 'connect-redis';

import {db, redis} from "./db";
import passport from "./lib/passport-local";

import {routers} from "./routers";
import {MAX_AGE_SESSION} from "./services/auth/auth-cookies";

const createServer = async () => {
  const app = express();
  const port = process.env.PORT || 3001;
  const RedisStore = connectRedis(session);

  app.use(cors({credentials: true, origin: process.env.FRONT_URL}));
  app.use(bodyParser.json());

  await redis.connect();

  await db.authenticate()
    .then(() => console.log('\x1b[36m[<<PostgraSQL connected>>]\x1b[0m'))
    .catch((e) => console.log('\x1b[31m[<<Error Connected>>]\x1b[0m: ', e.message));

  app.use(session({
    name: process.env.TOKEN,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: MAX_AGE_SESSION * 1000,
    },
    store: new RedisStore({client: redis})
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routers());

  app.listen(port, () => {
    console.log(`\x1b[34m[<<Successfully>>]\x1b[0m: server works - http://localhost:${port}`);
  });
}

createServer()
  .catch((e) => {
    console.log('[\x1b[31m Error \x1b[0m]: server error - ', e.message);
    process.exit(1);
  })
