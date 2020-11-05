import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBackend = _ => {
    return (
        <div>
            <ul>
                <li><NavLink to='/backend-templates/app'>app</NavLink></li>
                <li><NavLink to='/backend-templates/utils'>util</NavLink></li>
                <li><NavLink to='/backend-templates/route-example'>route example</NavLink></li>
            </ul>
        </div>
    )
}

export default NavigationBackend