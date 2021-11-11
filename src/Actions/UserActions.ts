import {GET_USER,LOGIN_USER,CREATE_USER, LOGOUT_USER,UPDATE_USER_USERNAME, UPDATE_USER_EMAIL, UPDATE_USER_PASSWORD} from './ActionTypes';
import axios from 'axios';

const hostURL = 'http://localhost:8080/';

interface GetUserI {
    id:number,
}

//Add as many actions as needed to retrive the correct data from API
export const getUser = (user:GetUserI) => async (dispatch: any) => {

    try{
    const res = await axios.get(hostURL + 'user/u?id=1');
    

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

interface ILogin {
    username: string,
    password: string
}

export const loginUser = (user:ILogin) => async (dispatch:any) => {

    try{
    
        const res = await axios.post(hostURL + 'user/login',user);
        let retrievedUser = {

            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            funds : res.data.funds,
            password : res.data.password
    
        }
        if(!retrievedUser.id)
            throw 'Incorrect credentials';

        return dispatch({
            type: LOGIN_USER,
            payload : retrievedUser
        });

    }catch(e){

        let failuser = {

            id: -1,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }
        console.log('in the error zone');
        return dispatch({
            type: LOGIN_USER,
            payload : failuser
        });

    }
}

interface ICreateUser {
    username: string,
    email: string,
    funds : number
    password: string
}

export const createUser = (user:ICreateUser) => async (dispatch:any) => {

    try{
        
        const res = await axios.post(hostURL + 'user/create-user', user);
        let createdUser = {

            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            funds : res.data.funds,
            password : res.data.password
    
        }
        if(!createdUser.id)
            throw 'Incorrect credentials';

        return dispatch({
            type: CREATE_USER,
            payload : createdUser
        });

    }catch(e){

        let failuser = {

            id: -1,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }

        return dispatch({
            type: CREATE_USER,
            payload : failuser
        });

    }
}



export const logOutUser = () => (dispatch:any) => {
    let noUser = {

        id: 0,
        username:'',
        email:'',
        funds : 0,
        password : ''

    }
    return dispatch({
        type: LOGOUT_USER,
        payload : noUser
    });
}

interface IUpdateUserUsername {
    id: number,
    username: string
}

export const updateUserUsername = (user:IUpdateUserUsername) => async (dispatch:any) => {

    try{
        
        const res = await axios.post(hostURL + 'user/update-username', user);
        let updatedUser = {

            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            funds : res.data.funds,
            password : res.data.password
    
        }
        if(!updatedUser.id)
            throw 'Incorrect credentials';

        return dispatch({
            type: UPDATE_USER_USERNAME,
            payload : updatedUser
        });

    }catch(e){

        let failuser = {

            id: -1,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }

        return dispatch({
            type: UPDATE_USER_USERNAME,
            payload : failuser
        });

    }
}


interface IUpdateUserEmail {
    id: number,
    email: string
}

export const updateUserEmail = (user:IUpdateUserEmail) => async (dispatch:any) => {

    try{
        
        const res = await axios.post(hostURL + 'user/update-email', user);
        let updatedUser = {

            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            funds : res.data.funds,
            password : res.data.password
    
        }
        if(!updatedUser.id)
            throw 'Incorrect credentials';

        return dispatch({
            type: UPDATE_USER_EMAIL,
            payload : updatedUser
        });

    }catch(e){

        let failuser = {

            id: -1,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }

        return dispatch({
            type: UPDATE_USER_EMAIL,
            payload : failuser
        });

    }
}

interface IUpdateUserPassword {
    id: number,
    password: string
}

export const updateUserPassword = (user:IUpdateUserPassword) => async (dispatch:any) => {

    try{
        
        const res = await axios.post(hostURL + 'user/update-password', user);
        let updatedUser = {

            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            funds : res.data.funds,
            password : res.data.password
    
        }
        if(!updatedUser.id)
            throw 'Something went wrong';

        return dispatch({
            type: UPDATE_USER_PASSWORD,
            payload : updatedUser
        });

    }catch(e){

        let failuser = {

            id: -1,
            username:'',
            email:'',
            funds : 0,
            password : ''
    
        }

        return dispatch({
            type: UPDATE_USER_PASSWORD,
            payload : failuser
        });

    }
}

