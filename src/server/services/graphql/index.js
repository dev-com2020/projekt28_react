import {makeExecutableSchema} from "@graphql-tools/schema";
import Schema from './schema.js'
import Resolvers from './resolvers.js'
import {ApolloServer} from "apollo-server-express";

export default (utils) => {
    const executableSchema = makeExecutableSchema({
        typeDefs: Schema,
        resolvers: Resolvers.call(utils),
    })

    const server = new ApolloServer({
        schema: executableSchema,
        context: ({req}) => req
    })
    return server;
}
