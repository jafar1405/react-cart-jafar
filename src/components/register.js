import React, { useState } from 'react';

import axios from 'axios'

const Register = ()=>{
  const [state, setState ] = useState({
    firstname:'',
    lastname:'',
    username:'',
    password:''
  })

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]:value
    })
    console.log(state)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post(
      `https://json-server-jafar.herokuapp.com/user`,
      {
      ...state
    }).then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
  <div className="register_wrapper d-flex align-items-center justify-content-center">
    <div>
      <h1 className="display-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" name="firstname" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" name="lastname" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" className="form-control" name="username" onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
)
}

export default Register;