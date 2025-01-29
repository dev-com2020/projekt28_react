import logger from "../../helpers/logger.js";

export default function resolvers() {

    const {db} = this;
    const Post = db.Post;
    const User = db.User;

    const resolvers = {
        RootQuery: {
            posts(root, args, context) {
                return Post.findAll({
                    order: [
                        ['createdAt', 'DESC']
                    ]
                });
            }
        },
        Post: {
            user(post, args, context) {
                return post.getUser();
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
            },
        },
    };

    return resolvers;
}
