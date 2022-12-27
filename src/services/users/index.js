import UsersModel from "../../models/user";

export const findUserEmail = (email) => {
  return UsersModel.findOne({where: {email}});
}

export const updateUserById = async (id, body) => {
  return UsersModel.update(body, {where: {id}})
}
