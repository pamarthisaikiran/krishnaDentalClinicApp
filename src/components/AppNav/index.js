import {Component} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap
import './index.css'

class AppNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top">
        <div className="container-fluid">
          
            <img className='main-logo'
              src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725806229/Screenshot_2024-09-08_200523-removebg-preview_orjjuy.png"
              alt="logo"
              
            />
          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link heading" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link heading" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link heading" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link heading" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link heading" to="/appointment">
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default AppNav
