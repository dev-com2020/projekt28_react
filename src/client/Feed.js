import {gql, useQuery} from "@apollo/client";


const GET_POSTS = gql`{
    posts {
        id
        text
        user {
            avatar
            username
        }
    }
}`;

const Feed = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return 'Loading...';
    if (error) return `Error...${error.message}`;

    const { posts } = data;
}

export default Feed