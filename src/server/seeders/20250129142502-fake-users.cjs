'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
          avatar: 'uploads/avatar.png',
          username: "TestUser",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
          {
            avatar: 'uploads/avatar.png',
            username: "TestUser_2",
            createdAt: new Date(),
            updatedAt: new Date(),
          }],
        {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
