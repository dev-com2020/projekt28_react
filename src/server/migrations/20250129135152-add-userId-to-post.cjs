'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
   return Promise.all([
       queryInterface.addColumn('posts',
           'user_id',{
         type: Sequelize.INTEGER,
           }),
       queryInterface.addConstraint('posts', {
         fields: ['user_id'],
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
          queryInterface.removeColumn('posts', 'user_id'),
      ])
  }
};
