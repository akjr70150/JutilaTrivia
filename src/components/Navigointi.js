import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navigointi extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink activeClassName="current" to='/kysymykset'>Aloita!</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigointi;