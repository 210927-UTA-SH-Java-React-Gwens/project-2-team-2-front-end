import React, { useEffect } from 'react';
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';
import { PasswordChangeComponent } from './PasswordChangeComponent/PasswordChangeComponent';
import { UserInfoComponent } from './UserInfoComponent/UserInfoComponent';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

export const UserComponent:React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    const history = useHistory();
    

    const sendBackVerificationPage = () => {
        history.push('/');
    }

    useEffect(() =>{
        if(appState.user.id <= 0)
            sendBackVerificationPage();
    });

    return (
    <div >
        <PageTitleComponent name="User Page" history={history}/>
        <UserInfoComponent/><br/>
        <PasswordChangeComponent/>
    </div>)
} 