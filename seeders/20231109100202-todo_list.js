'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('todo_lists', [{
      title: 'memasak telur',
      user_id: '4',
      status : 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'belajar express js',
      user_id: '3',
      status : 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
       title: 'belajar React js',
      user_id: '3',
      status : 'Active',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('todo_lists', null, {});
  }
};
