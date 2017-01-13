import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => (
       <ul className="navMid">
        <li className="brand"><Link to='/'>instagram</Link></li>
        <div className="navList">
          {props.items.map((item, index) => (<li key={index}><Link to={item.url}>{item.text}</Link></li>))}
            <li><i className="fa fa-sign-out" aria-hidden="true"></i></li>
        </div>
       </ul>
);

export default Navbar;
