import {IUser} from '../Store/types';
import {GET_USER,LOGIN_USER,CREATE_USER, LOGOUT_USER} from '../Actions/ActionTypes';

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
        case LOGIN_USER:
            initialState = action.payload;
            return {
                ...initialState
            }
        case CREATE_USER:
            initialState = action.payload;
            return {
                ...initialState
            }
        case GET_USER:
            initialState = action.payload;
            return {
                ...initialState
            } 
        case LOGOUT_USER:
            initialState = action.payload;
                return {
                    ...initialState
                } 
        default:
            return state;
    }

}