const typeDefinitions = `
type Post {
    id: Int
    text: String
    user: User
    }
    
type User {
    avatar: String
    username: String
}

type RootQuery {
    posts: [Post]
}

input UserInput {
    username: String!
    avatar: String!
}

input PostInput {
    text: String!
}

type RootMutation {
    addPost(
    post: PostInput!
    user: UserInput!
    ): Post
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`

export default [typeDefinitions]