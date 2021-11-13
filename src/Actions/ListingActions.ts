import axios from 'axios';
import { SERVER_ADDRESS } from '../server';
import {GET_LISTING, HOME_LISTINGS, SEARCH_LISTINGS} from './ActionTypes';
import {IListing} from '../Store/types';


/*
id: number,
    price: number,
    title:string,
    content : string,
    author_id: number,
    purchaser_id?: number,
    category:string
 */   

interface GetListing {
    id:number
}

export const getListing = (user:GetListing) => async (dispatch: any) => {
    
    try{
        let res = await axios.get(SERVER_ADDRESS + '/listing');
        console.log(res.data);
        return dispatch({
            type: GET_LISTING,
            payload: res.data
        });
    } catch(e){
        console.log("fetch issue");
        return dispatch({
            type: GET_LISTING,
            payload: []
        });
    }

}

interface HomeListings {
    id:number
}

export const homeListings = () => async (dispatch: any) => {

    try{
        let res = await axios.get(SERVER_ADDRESS + 'listing/home');
        console.log(res.data);
        return dispatch({
            type: HOME_LISTINGS,
            payload: res.data
        });
    } catch(e){
        console.log("fetch issue");
        return dispatch({
            type: HOME_LISTINGS,
            payload: []
        });
    }

}


interface SearchListings {
    title:string,
    content:string
}

export const searchListings = (keyword:any) => async (dispatch: any) => {

    try{
        let res = await axios.get(SERVER_ADDRESS + 'listing/search/' + keyword);
        console.log(res.data);
        return dispatch({
            type: SEARCH_LISTINGS,
            payload: res.data
        });
    } catch(e){
        console.log("fetch issue");
        return dispatch({
            type: SEARCH_LISTINGS,
            payload: []
        });
    }

}