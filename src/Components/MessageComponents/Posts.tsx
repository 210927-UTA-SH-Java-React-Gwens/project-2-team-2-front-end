import React, {useState, useEffect} from 'react';
import { getConversation } from '../../Actions/MessageActions';
import {useSelector} from 'react-redux';

export const Post: React.FC<any> = (post:any) => {
    
/*
    const appState = useSelector<any, any>((state) => state);

    useEffect(() => {
        setInterval( async() => {
            getConversation(1/*appState.user.id , 2 prop.whatever );
        }, 10000);
    },[])
    
    */
    return(
        <div>
            <h2>{post.sender.username}</h2>
            <span><p>{post.content}</p><p>{post.time}</p></span>
        </div>
    )
}