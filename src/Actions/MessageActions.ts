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
    let IMessages;
    try{
        const res = await axios.post('htttp://localhost:8080/project-2-team-2-front-end/api/create' ,user);

        IMessages = {
            id: res.data.id,
            sender_id: res.data.sender_id,
            reciever_id: res.data.reciever_id,
            time: res.data.time,
            content: res.data.content
        }

        return dispatch({
            type: POST_MESSAGE,
            payload: IMessages
        });
    } catch (e){
        IMessages = {
            author_id: -1,
            reciever_id: -1,
            listing_id: -1,
            time: '',
            content: ''
        }

        return dispatch({
            type: POST_MESSAGE,
            payload: IMessages
        });
    }
}