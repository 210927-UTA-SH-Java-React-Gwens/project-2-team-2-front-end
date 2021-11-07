import {IListing} from '../Store/types';

let initialState: IListing[] = []; 

type Action = {

    type:string,
    payload:object

};

export const listingReducer = (state:IListing[] = initialState, action:Action) =>{

    switch(action.type){
        default:
            return state;
    }

}