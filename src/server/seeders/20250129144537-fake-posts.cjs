'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
        'SELECT id from users;',
    ).then((user) => {
      const usersRows = user[0]
      return queryInterface.bulkInsert('posts', [{
            text: 'Lorem Ipsum',
            userId: usersRows[0].id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
            {
              text: 'Lorem Ipsum no.2',
              userId: usersRows[1].id,
              createdAt: new Date(),
              updatedAt: new Date(),
            }],
          {}
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
};
