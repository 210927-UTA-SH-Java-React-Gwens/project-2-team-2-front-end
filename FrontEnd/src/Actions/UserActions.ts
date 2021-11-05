import {GET_USER} from './ActionTypes';
import axios from 'axios';

interface GetUser {
    id:number,
}

export const getUser = (user:GetUser) => async (dispatch: any) => {

    try{
    const res = await axios.get('http://localhost:8080/user/');
    

    let user = {

        id: res.data.id,
        username:res.data.username,
        email:res.data.email,
        funds : res.data.funds,
        password : res.data.password

    }

    return dispatch({
        type: GET_USER,
        payload : user
    });
    }
    catch(e){
        let failuser = {

            id: 0,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }

        return dispatch({
            type: GET_USER,
            payload: failuser
        });

    }

}


