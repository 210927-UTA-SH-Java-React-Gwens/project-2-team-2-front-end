import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import { MessageContainer } from './MessageContainer';

/* import { MessageField } from './MessageField';*/

export const SendPost: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();

    let [Content, setContent] = useState('');
    
    const handleChange = (e:any) => {
        setContent(e.target.value);
    }


    const Send = async () => {
        let postCont = {
            author_id: appState.user.username,
            reciever_id: appState.listing.author_id /* replace */,
            listing_id: appState.listing.id /* replace */,
            time: new Date(Date.now()).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}),
            content: {Content}
        }

        await dispatch(
            postMessage({Content})
        );
    }

    return (
        <div className="message">
            <div className="gwen-header">
                <Header/>
            </div>
            <div className="message-container">
                <MessageContainer/>
            </div>
            <div className="message-list-container">

            </div>
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