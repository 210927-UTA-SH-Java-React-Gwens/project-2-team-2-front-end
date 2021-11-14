import React, {useState, useEffect} from 'react';
import { getConversation } from '../../Actions/MessageActions';
import {useSelector} from 'react-redux';

export const Posts: React.FC<any> = (props:any) => {

    const appState = useSelector<any, any>((state) => state);

    useEffect(() => {
        setInterval( async() => {
            getConversation(appState.user.username, props.username2);
        }, 10000);
    },[])
    
    return(
        <div>
            <h2>{appState.Message.sender_id}</h2>
            <span><p>{appState.Message.content}</p><p>{appState.Message.time}</p></span>
        </div>
    )
}