import logger from "../../helpers/logger.js";

export default function resolvers() {

    const {db} = this;
    const Post  = db.Post;

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
                user(root, args, context) {
                    return post.getUser();
                },
            },
            RootMutation: {
                addPost(root, {post, user}, context) {
                    const postObject = {
                        ...post,
                        user,
                        id: posts.length + 1
                    }
                    posts.push(postObject)
                    logger.log({level: 'info', message: `Added ${posts.length} posts`})
                    return postObject
                },
            },
        };

    return resolvers;
}
