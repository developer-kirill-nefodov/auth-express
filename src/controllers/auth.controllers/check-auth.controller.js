import {getLoginSession} from "../../services/auth/session";

const isIncludesArr = (arr, url) => {
  return !!arr.find(e => url.includes(e));
}

export const checkAuthController = async (req, res) => {
  try {
    const url = String(req.query.url);
    const session = await getLoginSession(req);

    if (session.user) {
      res.status(200).json(
        isIncludesArr(['login'], url) ? ({
          user: session.user,
          redirect: '/',
          message: 'you are registered'
        }) : session
      );
      return;
    }

    if (isIncludesArr(['login', 'forgot-password', 'reset-password'], url)) {
      res.status(200).json({message: 'check'});
      return;
    }

    res.status(200).json({
      redirect: '/login',
      message: 'You are not registered'
    });

  } catch (e) {
    res.status(400).send(e.message);
  }
}
