import React, {useEffect, useState} from 'react';
import {PageTitleComponent} from '../PageTitleComponent/PageTitleComponent';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

export const MyListingComponent: React.FC<any> = () => {
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
        <div>
            <PageTitleComponent name="My Listing" history={history}/>
            <h1>here im gonna display our listings</h1>
        </div>

    )
}