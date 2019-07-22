import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css'

const header = ()=> {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/now-playing">Now Playing</NavLink></li>
                    <li><NavLink to="/popular">Popular</NavLink></li>
                    <li><NavLink to="/upcoming">Upcoming</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default header;