/*import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getUser } from '../../Actions/UserActions';
import {useHistory, Link} from 'react-router-dom';

export const GetsUser:React.FC<any> = () => {

    //First we will pull in the application level state with useSelector
    const appState = useSelector<any, any>((state) => state);
    //Create the dispatcher to dispatch actions
    const dispatch = useDispatch();

    //We will setup useHistory to naviate using JS
    const history = useHistory();

    //Set up our component level state, that other components don't need to know about
    let [id, setId] = useState(1);

    useEffect(() => {
        console.log(appState);
    }, [appState]);


    //We need a function to actually handle the login
    const login = async () => {
        console.log('This is previous to call');
        await dispatch(
            getUser({id})
        );
    }
    return <h1 onClick={login}>Hello</h1>
}
*/