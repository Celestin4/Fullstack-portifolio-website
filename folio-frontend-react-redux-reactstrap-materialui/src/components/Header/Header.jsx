import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, Button, Collapse, NavbarToggler } from 'reactstrap';
import { Link as ScrollLink } from 'react-scroll';
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import  {logout} from "../../Redux/Auth/authSlice"

import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user);
console.log(user)

 const handleLogout = () => {
    dispatch(logout());
  };
  const linkStyle = {
    cursor: 'pointer'
  };

  const profilePhoto = ""
  
  return (
    <Navbar dark expand="md" className="navbar">
      <NavbarBrand href="/" className="logo">CELESTIN</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="collapse">
        <Nav className="nav ml-auto align-items-center" navbar>
          <NavItem className="navItem">
            <NavLink className="navLink">
              <ScrollLink
                activeClass="active"
                to="hello"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                style={linkStyle}
              >
                Home
              </ScrollLink>
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="navLink">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                style={linkStyle}
              >
                About
              </ScrollLink>
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="navLink">
              <ScrollLink
                activeClass="active"
                to="portfolio"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                style={linkStyle}
              >
                Portfolio
              </ScrollLink>
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="navLink">
              <ScrollLink
                activeClass="active"
                to="blog"
                spy={true}
                offset={-100}
                smooth={true}
                duration={100}
                style={linkStyle}
              >
                Blog
              </ScrollLink>
            </NavLink>
          </NavItem>
          <NavItem className="navItem">
            <NavLink className="navLink">
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                offset={-100}
                smooth={true}
                duration={500}
                style={linkStyle}
              >
                Contact
              </ScrollLink>
            </NavLink>
          </NavItem>
          <Nav>
            {user ? (
              <>
                <NavItem>
                <NavLink>
                  {profilePhoto ?  (
                    <div className="avatar-circle">
                    <img src="/path/to/user-image.jpg" alt="User" />
                  </div>
                  ): (
                    <div className="avatar-circle">
                      <FaUser />
                    </div>  
                  )}
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                  <Button color="primary" className="mr-2" onClick={handleLogout}>Logout</Button>
                </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                <NavLink>
                  <Button color="primary" className="mr-2" tag={Link} to="/login">Log In</Button>
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                  <Button color="secondary" tag={Link} to="/signup">Sign Up</Button>
                </NavLink>
                </NavItem>
            </>
            )}
            
          </Nav>
          
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
