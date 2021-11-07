import {IUser} from '../Store/types';
import {GET_USER} from '../Actions/ActionTypes';

let initialState:IUser = {
    id: 0,
    username:'',
    email:'',
    funds : 0,
    password : ''
}

type Action = {

    type:string,
    payload:any

};

export const userReducer = (state:IUser = initialState, action:Action) =>{

    switch(action.type){
        case GET_USER:
            initialState = action.payload;
            console.log(action.payload);
            return {
                ...initialState
            }
        default:
            return state;
    }

}