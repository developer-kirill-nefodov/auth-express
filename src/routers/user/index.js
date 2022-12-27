import {Router} from "express";

import {authGuard} from "../../middlewares/auth-guard";
import {updateUserRequestMiddleware} from "../../middlewares/request/user";

import {
  getUserController,
  updateUserController
} from "../../controllers/user.controllerts";

export function routerUser() {
  const router = Router();

  router.get('/',
    authGuard,
    getUserController
  )

  router.patch(
    '/',
    authGuard,
    updateUserRequestMiddleware,
    updateUserController
  );

  return router;
}
