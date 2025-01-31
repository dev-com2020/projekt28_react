'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const usersAndChats = Promise.all([
            queryInterface.sequelize.query(
                'SELECT id from users;',
            ),
            queryInterface.sequelize.query(
                'SELECT id from chats;',
            ),
        ]);
        return usersAndChats.then((rows) => {
            const users = rows[0][0]
            const chats = rows[1][0]

            return queryInterface.bulkInsert('messages', [{
                    user_id: users[0].id,
                    chat_id: chats[0].id,
                    text: 'to jest wiadomość nr 1',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                    {
                        user_id: users[1].id,
                        chat_id: chats[0].id,
                        text: 'to jest wiadomość nr 2',
                        created_at: new Date(),
                        updated_at: new Date(),
                    }],
                {}
            )
        })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('messages', null, {})
    }
};
