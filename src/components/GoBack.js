import React from 'react';
import { NavLink } from 'react-router-dom'

const GoBack = () => {
    return (
            <NavLink to='/'>
                <span className="GoBack">&#10092;</span>
            </NavLink>
    );
};

export default GoBack;<p></p>