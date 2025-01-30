import logger from "../../helpers/logger.js";

export default function resolvers() {

    const {db} = this;
    const Post = db.Post;
    const User = db.User;
    const Chat = db.Chat;
    const Message = db.Message;

    const resolvers = {
            Post: {
                user(post, args, context) {
                    return post.getUser();
                },
            },
            Message: {
                user(message, args, context) {
                    return message.getUser();
                },
                chat(message, args, context) {
                    return message.getChat();
                },
            },
            Chat: {
                users(chat, args, context) {
                    return chat.getUsers();
                },
                messages(chat, args, context){
                    return chat.getMessages({order: [['id', 'ASC']]})
                },
            },
        RootQuery: {
            posts(root, args, context) {
                return Post.findAll({
                    order: [
                        ['createdAt', 'DESC']
                    ]
                });
            },
            chats(root, args, context) {
                return User.findAll().then((users) => {
                    if (!users.length) {
                        return []
                    }
                    const userRow = users[0];

                    return Chat.findAll({
                        includes: [{
                            model: User,
                            required: true,
                            through: {
                                where: {
                                    userId: userRow.id
                                }
                            },
                        },
                            {
                                model: Message,
                            }
                        ],
                    })
                })
            },
            chat(root, chatId, context) {
                return Chat.findByPk(chatId, {
                    include: [{
                        model: User,
                        required: true,
                    },
                        {
                            model: Message,
                        }
                    ],
                })
            },
        },

            RootMutation: {
                addPost(root, {post}, context) {
                    return User.findAll().then((users) => {
                        const usersRow = users[0]
                        return Post.create({
                            ...post,
                        }).then((newPost) => {
                            return Promise.all([
                                newPost.setUser(usersRow.id),
                            ]).then(() => {
                                logger.log({
                                    level: 'info',
                                    message: "Utworzono post",
                                })
                                return newPost;
                            })
                        })
                    })
                }
                ,
            }
            ,
        }
        ;

        return resolvers;
    }
