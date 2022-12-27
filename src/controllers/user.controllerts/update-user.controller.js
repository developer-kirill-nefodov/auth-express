import UsersModel from "../../models/user";

export const updateUserController = async (req, res) => {
  try {
    const {first_name, last_name, email, password, id} = req.body;
    await UsersModel.update({
      ...first_name && {first_name},
      ...last_name && {last_name},
      ...email && {email},
      ...password && {password},
    }, {where: {id}});

    res.status(200).json({...req.body, password: ''});
  } catch (e) {
    res.status(400).send(e.message);
  }
}