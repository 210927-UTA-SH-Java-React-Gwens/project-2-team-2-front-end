import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../Reducers';

import {AppState} from './types';

const initialAppState:AppState = {

    user:{
        id: 0,
        username:'',
        email:'',
        funds : 0,
        password : ''
    },

    listing:[],
    messages:[]
}

const middleware = [thunk];

export const store = createStore(reducer, initialAppState, applyMiddleware(...middleware))