export async function getLoginSession(req) {
  if (!req.isAuthenticated()) {
    return {error: 401, message: 'user is not authorized'}
  }

  return {user: req.user};
}