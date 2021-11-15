import React, {useState, useEffect} from 'react';
import { Post } from './Posts';
import { getConversation } from '../../Actions/MessageActions';
import {useDispatch, useSelector} from 'react-redux';

export const MessageContainer:React.FC<any> = (data?:any) => {

    const appState = useSelector<any, any>((state) => state);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log("yeah, its the one below this");
        console.log(appState.message);
        console.log("yeah, its the one above this");
        setPosts(appState.message);
        console.log("posts array below");
        console.log(posts);
        console.log(appState);
    }, [appState]);

    return(
        <div>
            {posts.map((post:any) => {
                    return <Post {...post} key={post.postId} />
            })}
        </div>
    ) 
}