import React, { useState } from 'react';
import './Login.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [input, setInput] = useState({
    username: " ",
    password: " ",
  });
 
  //const [Password, setPassword] = useState(" ");
const history = useHistory()
const dispatch = useDispatch()

  const handleChange = (event) => {
    setInput({
      ...input, [event.target.name]: event.target.value 
    });
  };

  function loginFunc() {

    history.push('/todo')
 
  }

  // const handleChange = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <div>

      <form>
        <div class="row mb-3  col-md-6 mt-5 offset-3">

          <label for="inputUserName3" class="form-label"> Enter your UserName</label>
          <input type="text" onChange={handleChange} class="form-control" id="inputEmail3" placeholder="UserName" name="username" />

        </div>

        <div class="row mb-3  col-md-6 mt-5 offset-3 ">

          <label for="inputPassword3" class="form-label">Enter Your Password </label>
          <input type="Password" onChange={handleChange} class="form-control" id="inputPassword3" placeholder="Password" name="password" />

        </div>

        <button type="submit" onClick={loginFunc} class="btn btn-primary col-md-2 mt-5 offset-5">  Login </button>

      </form>

    </div>
  )
}

export default Login
