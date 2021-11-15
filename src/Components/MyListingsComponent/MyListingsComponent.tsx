import React, {useEffect, useState} from 'react';
import {PageTitleComponent} from '../PageTitleComponent/PageTitleComponent';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { ListingLoader } from '../ListingComponents/ListingLoaderComponent';

export const MyListings: React.FC<any> = () => {
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
            <PageTitleComponent name="My Listings" history={history}/>
            <ListingLoader url={'/search?user='+appState.user.username} />
        </div>

    )
}
