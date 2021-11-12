import React from 'react';
import { IMessages } from '../../Store/types';

export class Posts extends React.Component<any, IMessages>{

    constructor(props:any){
        super(props);

        this.state ={
            id: 0,
            sender_id: 0,
            receiver_id: 0,
            time: '',
            content: ''
        };
    }

    componentDidMount(){
        //Replace this with user information from Login Session
        this.setState({
           
        });
    }

    return(){
        <div>
            <h2>{this.state.id}</h2>
            <span><p>{this.state.content}</p><p>{this.state.time}</p></span>
        </div>
    }
}