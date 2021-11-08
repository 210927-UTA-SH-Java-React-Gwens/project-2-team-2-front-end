import React, {useState} from 'react';
import { PageTitleComponent } from '../PageTitleComponent/PageTitleComponent';
import { PasswordChangeComponent } from './PasswordChangeComponent/PasswordChangeComponent';
import { UserInfoComponent } from './UserInfoComponent/UserInfoComponent';
export const UserComponent:React.FC<any> = () => {


    return (
    <div >
        <PageTitleComponent name="User Page" />
        <UserInfoComponent/><br/>
        <PasswordChangeComponent/>
    </div>)
} 