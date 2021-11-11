import React from 'react';
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';
import { PasswordChangeComponent } from './PasswordChangeComponent/PasswordChangeComponent';
import { UserInfoComponent } from './UserInfoComponent/UserInfoComponent';
import { useHistory } from "react-router";

export const UserComponent:React.FC<any> = () => {
    const history = useHistory();

    return (
    <div >
        <PageTitleComponent name="User Page" history={history}/>
        <UserInfoComponent/><br/>
        <PasswordChangeComponent/>
    </div>)
} 