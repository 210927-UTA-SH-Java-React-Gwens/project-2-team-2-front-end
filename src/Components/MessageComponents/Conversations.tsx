import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import { MessageContainer } from './MessageContainer';
import { MessageListContainer } from './MessageListContainer';

import { getConversation } from '../../Actions/MessageActions';

/* import { MessageField } from './MessageField';*/

export const Conversations: React.FC<any> = (prop:any) => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();

    let [Content, setContent] = useState('');
    
    const handleChange = (e:any) => {
        setContent(e.target.value);
    }

    const Send = async () => {
        let postCont = {
            sender: appState.user,
            receiver: prop.author,
            time: new Date(Date.now()).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            content: Content
        }

        await dispatch(
            postMessage({postCont})
        );
    }

    useEffect(() => {
        test();
    }, []);

    const test = async () => {
        await dispatch(
            //replace 1 and 2 with {appState.user.id} and props whatever from ListingView
            getConversation(appState.user.id, prop.authorId)
        )}


    return (
        <div className="message">
            <div>
                <h1>MessagesPageInfoGoesHere</h1>
            </div>
            <div className="message-container">
                <MessageContainer/>
            </div>
            {/*<div className="message-list-container">
                <MessageListContainer/>
            </div>*/}
            <div className="message-field-container">
            <form>
                <label>Message</label>
                <input className='message-content' onChange={handleChange}/>
                </form>
                <button className="send-button" onClick={Send}>Send</button>
            </div>
        </div>
    )
}