'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('chats', [{
          createdAt: new Date(),
          updatedAt: new Date(),
        }],
        {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('chats', null, {})
  }
};
