import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css"


export const Nav = () => {
  return (
    <div>
    
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <NavLink class="navbar-brand" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink class= "navbar-brand" to="/studentdata">StudentData</NavLink>        </li> 
      </ul> 
    </div>

    
  </div>
</nav>
    </div>
  )
}
