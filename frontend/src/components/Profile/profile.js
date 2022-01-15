import React, {useContext} from 'react';

import './styles.css';

import { Context } from '../../Context/authContext'

export default function Profile() {
    const {user} = useContext(Context);

    return (
        <div className="profile-container">
            <div>
                <h1>{user.nickname[0].toUpperCase()}</h1>
            </div>
            <h3>{user.nickname}</h3>
            <h3>{user.email}</h3>
        </div>
    );
}