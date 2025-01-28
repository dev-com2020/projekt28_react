import {makeExecutableSchema} from "@graphql-tools/schema";
import Schema from './schema.js'
import Resolvers from './resolvers.js'
import {ApolloServer} from "apollo-server-express";

const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers
})

const server = new ApolloServer({
    schema: executableSchema,
    context: ({ req }) => req
})

export default server;