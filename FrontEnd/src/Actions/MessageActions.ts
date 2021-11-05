import {GET_MESSAGE} from './ActionTypes';

interface GetMessage {
    author_id:number
}

export const getMessageByAuthor = (user:GetMessage) => async (dispatch: any) => {
    //Logic to implement
}