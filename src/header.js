import React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = ()=>(
  <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/forgotpassword">Forgot Password</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    
  </nav>

)

export default Header;