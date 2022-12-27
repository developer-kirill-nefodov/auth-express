import dbConfig from '../config/db.config.js';

const env = process.env.NODE_ENV || 'development';

export default {
  [env]: {
    dialect: dbConfig.dialect,
    database: dbConfig.DB,
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    migrationStorageTableName: 'SequelizeMeta'
  }
};
