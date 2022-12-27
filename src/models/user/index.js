import {DataTypes} from 'sequelize';

import {db} from "../../db";
import {userPassword} from "../../helpers/user";

const UsersModel = db.define("user", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', userPassword(value));
    }
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

export default UsersModel;
