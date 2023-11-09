'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      nama: 'azis',
      username: 'azis23',
      password : 'akusuka123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nama: 'angga',
      username: 'angga23',
      password : 'angga14',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
