import {db} from "../../db";
import {DataTypes} from 'sequelize';

const SettingModel = db.define("setting", {
  name: {
    type: DataTypes.ENUM('EMAIL', 'AUTO', 'TO_NOTIFY', 'FROM_NAME', 'FROM_EMAIL', 'REPLY_TO_EMAIL'),
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})


export default SettingModel;