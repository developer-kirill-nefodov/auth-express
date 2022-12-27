module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('settings', [
      {name: 'EMAIL', value: 'Payout deadline is coming: %DATE% You need to pay the amount: %AMOUNT%', created_at: new Date(), updated_at: new Date()},
      {name: 'FROM_NAME', value: 'Megamani', created_at: new Date(), updated_at: new Date()},
      {name: 'FROM_EMAIL', value: process.env.SEND_EMAIL, created_at: new Date(), updated_at: new Date()},
      {name: 'REPLY_TO_EMAIL', value: process.env.SEND_EMAIL, created_at: new Date(), updated_at: new Date()},
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('settings', null, {});
  }
};
