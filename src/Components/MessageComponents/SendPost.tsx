import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import {Header} from '../HeaderComponent/HeaderComponent';
import { MessageContainer } from './MessageContainer';
import { MessageField } from './MessageField';

export const SendPost: React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();

    let [Content, setContent] = useState('');
    let [Sender_Id, setSender_Id] = useState('');

const handleChange = (e:any) => {
    if(e.target.name === 'Sender_Id'){
        setSender_Id(e.target.value);
    } else {
        setContent(e.target.value);
    }
}

const Send = async () => {
    await dispatch(
        postMessage({Sender_Id, Content})
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
                <MessageField/>
            </div>
        </div>
    )
}