import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


function Header() {

 const dispatch = useDispatch()

const auth= useSelector(state=> state.auth) 

  const history = useHistory();
  
  

  function handleClick() {

    // localStorage.removeItem("token")
    // dispatch(getLogoutRoute())
     history.push('/login')

  }




  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><strong>TO-DO App</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"> <Link class="todo text-dark" to="/"> Home </Link> </a>
              </li>
              <li class="nav-item"> 


                 <a class="nav-link" href="#">
                
                   
                    <Link class="todo text-dark" to="/login"> Login </Link>
                     
                  
                
                  </a>

              </li>
              

              <li class="nav-item">
                <a class="nav-link" href="#"> <Link class="todo text-dark" to="/"> To-Do </Link> </a>
              </li>

            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
              <button class="btn btn-outline-danger" style={{marginLeft:'1rem'}} onClick={handleClick}> Logout </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
