import React from 'react';
import { Link } from 'react-router-dom';


export default () => (
    <nav>
        <ul>
            <li><Link to="/">homepage</Link></li>
            <li><Link to="/category">category</Link></li>
            <li><Link to="/photo">photo</Link></li>
        </ul>
    </nav>
)