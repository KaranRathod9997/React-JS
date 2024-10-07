import React from 'react'
import "./app.css"

const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <h1 class="logo">logo</h1>
        <ul>
          <li>home</li>
          <li>menu</li>
          <li>contect</li>
          <li>map</li>
          <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu bg-danger" aria-labelledby="navbarDropdown" >
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
