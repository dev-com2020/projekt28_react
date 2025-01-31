'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chats', [{
          created_at: new Date(),
          updated_at: new Date(),
        }],
        {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chats', null, {})
  }
};
