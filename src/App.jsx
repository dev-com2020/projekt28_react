import {useState} from 'react'
import './App.css'

function App() {
    const initialPosts = [
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
    ];
    const [posts, setPosts] = useState(initialPosts)
    const [postContent, setPostContent] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const NewPost = {
            id: posts.length + 1,
            text: postContent,
            user: {
                avatar: 'https://avatars1.githubusercontent.com/u/55',
                username: 'John',
            }
        }
        setPosts([NewPost, ...posts])
        setPostContent('')
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div>
                {posts.map((post) =>
                    <div key={post.id}>
                        <div>
                            <img src={post.user.avatar} alt={post.user.username}/>
                            <h2>{post.user.username}</h2>
                        </div>
                        <p>
                            {post.text}
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default App
