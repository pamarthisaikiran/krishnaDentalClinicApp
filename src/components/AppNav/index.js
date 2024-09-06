import {Component} from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class AppNav extends Component{
    render(){
        return (
           /* <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
          <div className="img-head">
          
            <img
              className="website-logo"
              src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725543705/istockphoto-1492927296-612x612_inaplp.jpg"
              alt="website logo"
            />
            <h1 className="main-head">KRISHNA DENTALS</h1>
            </div>
           
          </Link>

          
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
          <div className="img-head">
         
            <img
              className="website-logo"
              src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725543705/istockphoto-1492927296-612x612_inaplp.jpg"
              alt="website logo"
            />
             <h1 className="main-head">KRISHNA DENTALS</h1>
            </div>
           
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Services
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725551933/home_n7viac.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              <img
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725551849/services_alwc24.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725552025/aboutUs_zbquph.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725552203/contactUs_hynbdq.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav> */

  
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand heading" to="/" >
        <img
          src="https://res.cloudinary.com/ddbhluguf/image/upload/v1725543705/istockphoto-1492927296-612x612_inaplp.jpg"
          alt="logo"
          style={{ width: '40px' }}
        />
        Krishna Dentals
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav"> 
        {/* justify-content-center centers the nav items */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link heading" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link heading" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link heading" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link heading" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link heading" to="/appointment">Appointment</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


    

        )
    }
}

export default AppNav