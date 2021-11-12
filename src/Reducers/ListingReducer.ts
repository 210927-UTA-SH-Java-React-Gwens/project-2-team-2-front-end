import { HOME_LISTINGS, SEARCH_LISTINGS } from '../Actions/ActionTypes';
import {IListing} from '../Store/types';

let initialAppState: IListing[] = []; 

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
    payload:IListing[]

};

export const listingReducer = (state:IListing[] = initialAppState, action:Action) =>{

    switch(action.type){
        case HOME_LISTINGS:
            return action.payload;
            
        case SEARCH_LISTINGS:
            return action.payload;

        default:
            return state;
    }

}