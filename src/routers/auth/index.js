import {Router} from 'express';

import {authGuard} from "../../middlewares/auth-guard";
import {questGuard} from "../../middlewares/quest-guard";

import {
  forgotRequestMiddleware,
  loginRequestMiddleware,
  resetRequestMiddleware
} from "../../middlewares/request/auth";

import {
  loginController,
  logoutController,
  checkAuthController,
  forgotPasswordController,
  resetPasswordController
} from "../../controllers/auth.controllers";

export function routerAuth() {
  const router = Router();

  router.post(
    '/login',
    questGuard,
    loginRequestMiddleware,
    loginController
  );

  router.get(
    '/logout',
    authGuard,
    logoutController
  );

  router.post(
    '/forgot-password',
    questGuard,
    forgotRequestMiddleware,
    forgotPasswordController
  );

  router.post(
    '/reset-password',
    questGuard,
    resetRequestMiddleware,
    resetPasswordController
  );

  router.get(
    '/check-auth',
    checkAuthController
  );

  return router;
}