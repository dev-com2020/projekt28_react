import { useState } from "react";
import "./App.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Feed from "./client/Feed.js";

function App() {
    const initialPosts = [
        {
            id: 1,
            text: "Hello everyone! 👋",
            user: {
                avatar: "https://i.pravatar.cc/150?img=1",
                username: "John Doe",
            },
        },
        {
            id: 2,
            text: "Just had an amazing coffee ☕",
            user: {
                avatar: "https://i.pravatar.cc/150?img=2",
                username: "Tomasz Kowalski",
            },
        },
    ];

    const [posts, setPosts] = useState(initialPosts);
    const [postContent, setPostContent] = useState("");

    const getRandomAvatar = () => {
        const randomId = Math.floor(Math.random() * 70) + 1; // Losowa liczba od 1 do 70
        return `https://i.pravatar.cc/150?img=${randomId}`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (postContent.trim() === "") return; // Nie pozwalamy na puste posty

        const NewPost = {
            id: posts.length + 1,
            text: postContent,
            user: {
                avatar: getRandomAvatar(),
                username: "Anna Nowak",
            },
        };
        setPosts([NewPost, ...posts]);
        setPostContent("");
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Facebook Clone</title>
                    <meta charSet="utf-8" />
                    <meta name="keywords" content="Facebook, React, Social Media" />
                </Helmet>
            </HelmetProvider>
            <Feed/>

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

export default App;
