import React, {useState, useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { rejoinSession } from '../../Actions/UserActions';


export const SessionManager:React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    let dispatch = useDispatch();

    const rejoinSessionCall = async (id:number) => {
        dispatch(rejoinSession({id}));
      }

    useEffect(() => {
        console.log("first?");
        let user = sessionStorage.getItem('user');
        console.log('CHECKING IFS');
        console.log(user!=null);
        console.log(Number(user)>0);
        console.log(appState);
        console.log(appState.user.id <0);
        
        if(user!=null && Number(user) > 0 && appState.user.id <=0)
        {
        
          rejoinSessionCall(Number(user));
        }
        
        console.log(appState);
      
      }, [appState]);


    return(<div></div>)
}
