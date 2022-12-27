const crypto = require('crypto');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: 'Kirill',
        last_name: 'Nefodov',
        email: 'admin@gmail.com',
        phone: '+380963703264',
        password: crypto.pbkdf2Sync('root', 'xxx_)(_xxx', 1000, 64, 'sha512').toString('hex'),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
