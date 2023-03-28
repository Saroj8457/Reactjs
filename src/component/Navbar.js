import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <a className="nav-link text-info" href="#">{props.jiban} </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-info" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}
