import {IMessages} from '../Store/types' ;

let initialState: IMessages  [] = [];


type Action = {

    type:string,
    payload:object

};

export const messageReducer = (state:IMessages[] = initialState, action:Action) => {

    switch(action.type){
        default:
            return state;
    }

}

