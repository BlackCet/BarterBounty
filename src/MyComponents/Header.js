import React from 'react'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reviews</a>
        </li>
        
       
      </ul>
      
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sign In/Sign Up
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Sign Up</a></li>
            <li><a class="dropdown-item" href="#">Sign In</a></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>
      
    </div>
  </div>
</nav>
  )
}
