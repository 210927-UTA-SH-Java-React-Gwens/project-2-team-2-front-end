import React, {useEffect, useState} from 'react';
import {PageTitleComponent} from '../PageTitleComponent/PageTitleComponent';
import { useHistory } from 'react-router';

export const MyListingComponent: React.FC<any> = () => {
    const history = useHistory();

    return (
        <div>
            <PageTitleComponent name="My Listing" history={history}/>
            <h1>here im gonna display our listings</h1>
        </div>

    )
}