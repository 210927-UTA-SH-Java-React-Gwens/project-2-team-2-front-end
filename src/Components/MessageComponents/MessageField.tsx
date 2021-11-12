import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postMessage} from "../../Actions/MessageActions";

export const MessageField: React.FC<any> = () =>{
    const sendMessage = async() => {
        
        await dispatch(
            //create message object?
            postMessage({})
        );
        }

    return (
        <div className='form-container'>
            <form>
                <label>Message</label>
                <input name='message-content' onChange={sendMessage}/>
                </form>
                <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
    );
}