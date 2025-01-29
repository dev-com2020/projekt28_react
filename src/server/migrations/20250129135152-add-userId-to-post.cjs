'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   return Promise.all([
       queryInterface.addColumn('posts',
           'userId',{
         type: Sequelize.INTEGER,
           }),
       queryInterface.addConstraint('posts', {
         fields: ['userId'],
         type: 'foreign key',
         name: 'fk_user_id',
         references: {
           table: 'users',
           field: 'id',
         },
         onDelete: 'CASCADE',
         onUpdate: 'CASCADE',
       })
   ])
  },

  down: async (queryInterface, Sequelize) => {
      return Promise.all([
          queryInterface.removeColumn('posts', 'userId'),
      ])
  }
};
