import { HOME_LISTINGS, SEARCH_LISTINGS } from '../Actions/ActionTypes';
import {IListing} from '../Store/types';

let initialAppState: IListing[]=[];

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

    type: string,
    keyword: '', 
    payload:IListing[]

};

export const listingReducer = (state = initialAppState, action:Action) => {

    switch(action.type){
        case HOME_LISTINGS:
            return action.payload;/*{
                listing: action.payload,
                ...state
            };*/

        case SEARCH_LISTINGS:
            return {
                ...state,
                listing: action.payload
            };
        default:
            return state;
    }

}