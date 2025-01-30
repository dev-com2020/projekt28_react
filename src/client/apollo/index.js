import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const client = new ApolloClient({
    link: from([
        onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors) {
                graphQLErrors.map(({message, locations, path}) =>
                    console.log(`[GraphQL error]: ${message},
                        ${locations}, ${path}`,))
            }
            if (networkError) {
                console.log(`[Network error]: ${networkError}`);
            }
        }),
        new HttpLink({
            uri: 'http://localhost:8888/graphql',
        }),
    ]),
    cache: new InMemoryCache(),
})

export default client;
