import {IUser} from '../Store/types';
import {GET_USER,LOGIN_USER,CREATE_USER, LOGOUT_USER,UPDATE_USER_USERNAME, UPDATE_USER_EMAIL, UPDATE_USER_PASSWORD, ADD_FUNDS_TO_USER, VERIFY_USER_EMAIL} from '../Actions/ActionTypes';

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
            console.log(action.payload);
            initialState = action.payload;
            if(action.payload.id===-1)
                alert('Wrong credentials');
            else if(action.payload.id >0)
                sessionStorage.setItem('user',action.payload.id); //We have to read this everytime a page reloads


            return {
                ...initialState
            }
        case CREATE_USER:
            //initialState = action.payload;
            if(action.payload.id>0)
                alert('Account created, please confirm your email');
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
            sessionStorage.removeItem('user');
            return {
                    ...initialState
                } 
        case UPDATE_USER_USERNAME:
            if(action.payload.id>0)
                initialState = action.payload;
                return {
                    ...initialState
                }
        case UPDATE_USER_EMAIL:
            if(action.payload.id>0)
                initialState = action.payload;
                return {
                    ...initialState
                }
        case UPDATE_USER_PASSWORD:
            if(action.payload.id>0)
                initialState = action.payload;
                return {
                    ...initialState
                }
        case ADD_FUNDS_TO_USER:
            if(action.payload.id>0)
                initialState = action.payload;
                return {
                    ...initialState
                }
        case VERIFY_USER_EMAIL:
            if(action.payload.id>0){
                initialState = action.payload;
                sessionStorage.setItem('user',action.payload.id); //We have to read this everytime a page reloads
                alert('Email verified, welcome!');
            }
            else
                alert('Incorrect code');
                
                return {
                    ...initialState
                }
        default:
            return state;
    }

}