import React from 'react';

import {Link} from 'react-router-dom'

const Login = ()=>(
  <div className="d-flex align-items-center justify-content-center login_wrapper">
    <div>
      <h1 className="display-4">Login</h1>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      <Link to="/forgotpassword">Fogot Password?</Link> | 
      <Link to="/register"> Sign Up</Link>

    </div>
  </div>
)

export default Login;