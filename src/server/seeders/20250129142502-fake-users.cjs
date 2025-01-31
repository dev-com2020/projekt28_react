'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
          avatar: 'uploads/avatar.png',
          username: "TestUser",
          created_at: new Date(),
          updated_at: new Date(),
        },
          {
            avatar: 'uploads/avatar.png',
            username: "TestUser_2",
            created_at: new Date(),
            updated_at: new Date(),
          }],
        {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
