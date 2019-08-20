import React from 'react';

import {Link} from 'react-router-dom'

const ForgotPassword = ()=>(
  <div className="d-flex align-items-center justify-content-center login_wrapper">
    <div>
      <h1 className="display-4">Forgot Password</h1>
      <form>
        <div className="form-group">
          <label>E-mail Id</label>
          <input type="text" className="form-control" />
        </div>
        
        <button className="btn btn-primary">Reset</button>
      </form>

    </div>
  </div>
)

export default ForgotPassword;