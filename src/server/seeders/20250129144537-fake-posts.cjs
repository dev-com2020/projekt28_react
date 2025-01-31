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
            user_id: usersRows[0].id,
            created_at: new Date(),
            updated_at: new Date(),
          },
            {
              text: 'Lorem Ipsum no.2',
              user_id: usersRows[1].id,
              created_at: new Date(),
              updated_at: new Date(),
            }],
          {}
      )
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
};
