import {GET_MESSAGE, POST_MESSAGE} from './ActionTypes';
import axios from 'axios';

interface GetMessage {
    author_id: number,
    reciever_id: number,
    listing_id: number
}

interface PostMessage {
    author_id: number,
    reciever_id: number,
    listing_id: number,
    time: string,
    content: string
}

export const getMessageByAuthor = (user:GetMessage) => async (dispatch: any) => {
    try{
        let res = await axios.get('http://localhost:8080/');
        console.log(res.data);
        return dispatch({
            type: GET_MESSAGE,
            payload: res.data
        });
    } catch(e){
        console.log("Well that failed...");
        return dispatch({
            type: GET_MESSAGE,
            payload: []
        });
    }
}

export const postMessage = (user:PostMessage) => async (dispatch: any) => {
    let SentMessage = IMessage;

    const res = await axios.post('htttp://localhost:8080/project-2-team-2-front-end/api/post' ,user);

    IMessage = {
        author_id: res.data.author_id,
        reciever_id: res.data.reciever_id,
        listing_id: res.data.listing_id,
        time: res.data.time,
        content: res.data.content
    }
}