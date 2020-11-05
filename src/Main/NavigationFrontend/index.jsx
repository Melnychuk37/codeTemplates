import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../../App.css';

const NavigationFrontend = _ => {
    return (
        <div>
            <ul>
                <li><NavLink to='/frontend-templates/playform' activeClassName='active'>Play form component</NavLink></li>
                <li><NavLink to='/frontend-templates/state-example' activeClassName='active'>State example</NavLink></li>
            </ul>
        </div>
    )
}

export default NavigationFrontend