import {Router} from 'express';

import {routerAuth} from "./auth";
import {routerUser} from "./user";

export function routers() {
  const router = Router();

  router.use('/auth', routerAuth());
  router.use('/user', routerUser());

  return router;
}
