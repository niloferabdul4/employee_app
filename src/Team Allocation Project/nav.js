import React from 'react';

import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink  to ='/'>Home </NavLink>
               </li>
               <li>
                     <NavLink  to='/teams'>Teams </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
