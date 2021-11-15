import { POST_MESSAGE, GET_MESSAGE, GET_RECIPIENTS} from '../Actions/ActionTypes';
import {IMessages} from '../Store/types' ;

/*let initialState:IMessages= {
    id: 0,
    sender_id: 0,
    receiver_id: 0,
    time: '',
    content: ''
}*/

let initialState: IMessages[] = []

type Action = {

    type:string,
    payload:IMessages

};

export const messageReducer = (state:IMessages[] = initialState, action:Action) => {

    switch(action.type){
        case POST_MESSAGE:
            //initialState = action.payload;
            return{
                ...initialState
            }
        case GET_MESSAGE:
            return action.payload
            
        case GET_RECIPIENTS:
            return action.payload

        default:
            return state;
    }

}

