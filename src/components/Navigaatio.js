import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navigaatio = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Etusivu</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/kysymykset'>Kysymykset</NavLink></li>
        </ul>
    </nav>
);

export default Navigaatio;