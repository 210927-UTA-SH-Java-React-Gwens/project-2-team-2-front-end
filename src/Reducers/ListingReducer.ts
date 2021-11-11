import { HOME_LISTINGS, SEARCH_LISTINGS } from '../Actions/ActionTypes';
import {IListing} from '../Store/types';

let initialState: IListing[] = []; 

/*
id: number,
    price: number,
    title:string,
    content : string,
    author_id: number,
    purchaser_id?: number,
    category:string
 */   

type Action = {

    type:string,
    payload:object

};

export const listingReducer = (state:IListing[] = initialState, action:Action) =>{

    switch(action.type){
        case HOME_LISTINGS:
            initialState = action.payload;
            return {
                ...initialState
            }
        case SEARCH_LISTINGS:
            initialState = action.payload;
            return {
                ...initialState
            }
        default:
            return state;
    }

}