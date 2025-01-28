
let posts = [
    {
        id: 1,
        text: 'Hello',
        user: {
            avatar: 'https://avatars1.githubusercontent.com/u/55',
            username: 'John',
        }
    },
    {
        id: 2,
        text: 'Hello...',
        user: {
            avatar: 'https://avatars1.githubusercontent.com/u/55',
            username: 'Tomasz',
        }
    }
]

const resolvers = {
    RootQuery: {
        posts(root,args,context){
            return posts
        },
    },
    RootMutation: {
        addPost(root, { post, user }, context){
            const postObject = {
                ...post,
                user,
                id: post.length + 1
            }
            posts.push(postObject)
            return postObject
        },
    },
};

export default resolvers;