import { gql, useQuery } from "@apollo/client";
import "./Chats.css";

const GET_CHATS = gql`
    {
        chats {
            id
            users {
                id
                avatar
                username
            }
        }
    }
`;

const Chats = () => {
    const { loading, error, data } = useQuery(GET_CHATS);
    if (loading) return 'Loading...';
    if (error) return `Error...${error.message}`;
    const { chats } = data;

    return (
        <div>
            <div>
                {chats.map((chat) => (
                    <div key={"chat" + chat.id} className="chat-container">
                        <h2 className="chat-header">Chat ID: {chat.id}</h2>
                        <div>
                            <h3>Users:</h3>
                            {chat.users.map((user) => (
                                <div key={"user" + user.id} className="user-item">
                                    {user.avatar && <img src={user.avatar} alt={`${user.username}'s avatar`} className="user-avatar" />}
                                    <span>{user.username}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chats;