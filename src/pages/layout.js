
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import j1 from './img/icon-deal.png';

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-2">
        <div className="container-fluid">
          <img src={j1} />
          <Link className="navbar-brand" to="/">Makaan</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>

              <NavDropdown title="Product" id="product-dropdown">
                <NavDropdown.Item as={Link} to="/Productlist">
                  Product list1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Producttype">
                  Product list2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Productagent">
                  Product list3
                </NavDropdown.Item>
              </NavDropdown>

              <li className="nav-item">
                <Link className="nav-link" to="/product">Pages</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>

              <li className="nav-item">
                <button className="btn btn-success ms-lg-3">
                  Add Property
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>

  )
}

export default Layout;