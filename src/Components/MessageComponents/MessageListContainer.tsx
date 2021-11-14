import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import { IUser } from '../../Store/types';


export const MessageListContainer: React.FC<any> = (props:any) => {

    const appState = useSelector<any, any>((state) => state);

    let [recipients, setRecipients] = useState<IUser[]>([]);

    useEffect( () => {
        axios.get('http://localhost:8080/message/recievers').then((res) =>{setRecipients(res.data)})
    }, []);

    
        
    

//Logic to create array of message recipients if any exist
    if (recipients.length) return(
        <div>
            {
                recipients.map((recipient:any) => (
                    <div className="recipients">{recipient}</div>
                ))
            }
        </div>
    ) 
    else return <div></div>
}