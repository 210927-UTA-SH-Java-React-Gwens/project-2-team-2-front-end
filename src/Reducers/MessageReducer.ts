import { POST_MESSAGE, GET_MESSAGE} from '../Actions/ActionTypes';
import {IMessages} from '../Store/types' ;

let initialState:IMessages= {
    id: 0,
    sender_id: 0,
    receiver_id: 0,
    time: '',
    content: ''
}


type Action = {

    type:string,
    payload:IMessages

};

export const messageReducer = (state:IMessages = initialState, action:Action) => {

    switch(action.type){
        case POST_MESSAGE:
            initialState = action.payload;
            return{
                ...initialState
            }
        case GET_MESSAGE:
            initialState = action.payload;
            return{
                ...initialState
            }

        default:
            return state;
    }

}

