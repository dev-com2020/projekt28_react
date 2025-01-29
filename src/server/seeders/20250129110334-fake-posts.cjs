'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [{
      text: 'Lorem Ipsum',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
        text: 'Lorem Ipsum no.2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }],
    {}
    )
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
};
