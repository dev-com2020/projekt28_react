const typeDefinitions = `
type Post {
    id: Int
    text: String
    user: User
    }
    
type User {
    id: Int
    avatar: String
    username: String
}

type RootQuery {
    posts: [Post]
}


input PostInput {
    text: String!
}

type RootMutation {
    addPost(
    post: PostInput!
    ): Post
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`

export default [typeDefinitions]