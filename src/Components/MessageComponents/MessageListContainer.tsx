import React, {useState, useEffect} from 'react';
import { getDistinctRecipients } from '../../Actions/MessageActions';
import {useSelector} from 'react-redux';
import { IUser } from '../../Store/types';
import { MessageList } from './MessageList';


export const MessageListContainer: React.FC<any> = (props:any) => {

    const appState = useSelector<any, any>((state) => state);
    let [posts, setPosts] = useState([]);


    useEffect( () => {
        getDistinctRecipients(appState.user.id)
        setPosts(appState.message)
    }, []);



//Logic to create array of message recipients if any exist
    return(
        <div>
            {posts.map((post:any) => {
                    return <MessageList {...post} key={post.postId} />
            })}
        </div>
    ) 
}