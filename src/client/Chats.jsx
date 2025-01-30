import {gql, useQuery} from "@apollo/client";
import {useState} from "react";


const GET_CHATS = gql`{
    chats {
        id
        users {
            id
            avatar
            username
        }
    }
}`;

const Chats = () => {

    const {loading, error, data} = useQuery(GET_CHATS);

    if (loading) return 'Loading...';
    if (error) return `Error...${error.message}`;

    const {chats} = data;

    return (
        <div>
            <div>
                {chats.map((chat) =>
                    <div key={"chat" + chat.id}>
                        <h2>{chat.id}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Chats;