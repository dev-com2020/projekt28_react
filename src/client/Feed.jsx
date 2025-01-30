import {gql, useQuery, useMutation} from "@apollo/client";
import {useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";


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
const ADD_POST = gql`
    mutation AddPost($post: PostInput!) {
        addPost(post: $post) {
            id
            text
            user {
                username
                avatar
            }
        }
    }
`;

const Feed = () => {
    const {loading, error, data} = useQuery(GET_POSTS);
    const [addPost] = useMutation(ADD_POST);
    const [postContent, setPostContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost({variables: {post: {text: postContent}}});
        setPostContent('');
    }

    if (loading) return 'Loading...';
    if (error) return `Error...${error.message}`;

    const {posts} = data;

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Facebook Feed clone</title>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="Facebook, React, Social Media" />
                </Helmet>
            </HelmetProvider>

            <div className="container">
                <header className="navbar">
                    <h1>Facebook Clone</h1>
                </header>

                <div className="feed">
                    <div className="post-box">
                        <form onSubmit={handleSubmit}>
              <textarea
                  className="post-input"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Co słychać?"
              />
                            <button type="submit" className="submit-button">
                                Opublikuj
                            </button>
                        </form>
                    </div>

                    <div className="posts">
                        {posts.map((post) => (
                            <div key={post.id} className="post">
                                <div className="post-header">
                                    <img
                                        src={post.user.avatar}
                                        alt={post.user.username}
                                        className="avatar"
                                    />
                                    <h2 className="username">{post.user.username}</h2>
                                </div>
                                <p className="post-text">{post.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feed