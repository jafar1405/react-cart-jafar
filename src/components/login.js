import React, {useState, useEffect} from 'react';

import {Link, Redirect} from 'react-router-dom';

import Axios from 'axios';

const Login = (props)=>{

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()
    Axios.get(`https://json-server-jafar.herokuapp.com/user/?username=${username}`)
    .then(res=>{
      return res.data
      
    }).then(res=>{
      const [user] = res;
      
      if(user.password === password){
        console.log(user)
        props.history.push("/register");
        
      }
    })
    
    
    
  }

  return(
    <div className="d-flex align-items-center justify-content-center login_wrapper">
    <div>
      <h1 className="display-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username" onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Link to="/forgotpassword">Fogot Password?</Link> | 
      <Link to="/register"> Sign Up</Link>

    </div>
  </div>
  )
}

export default Login;