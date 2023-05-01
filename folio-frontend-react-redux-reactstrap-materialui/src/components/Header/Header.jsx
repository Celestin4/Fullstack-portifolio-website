import React, { useState , useContext} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Features/AuthContext'

import './header.scss'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, authenticated , logout} = useContext(AuthContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <Navbar light expand="md" className="navbar justify-content-between">
      <NavbarBrand tag= {Link} to="/" className='logo'>Celestin Ltd</NavbarBrand>
      <NavbarToggler onClick={toggle} className=" bg-white">
          {isOpen ? <IoClose size={30} /> : <span className="navbar-toggler-icon" />}
        </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav  className="navLinks mx-auto" navbar>
          <NavItem className='navItem'>
            <NavLink tag= {Link} to="/" className='navLink'>Home</NavLink>
          </NavItem>
          <NavItem className='navItem'>
            <NavLink tag= {Link} to="/about" className='navLink'>About Me</NavLink>
          </NavItem>
          <NavItem className='navItem'>
            <NavLink tag= {Link}  className='navLink'>Portfolio</NavLink>
          </NavItem>
          <NavItem className='navItem'>
            <NavLink tag= {Link} Link to="/blog" className='navLink'>Blog</NavLink>
          </NavItem>
          <NavItem className='navItem'>
            <NavLink tag= {Link} to="/contact" className='navLink'>Contact Me</NavLink>
          </NavItem>
        </Nav>
        <Nav className='sign'>
          {authenticated ? (
            <>
            {user && <h1>{user.email}</h1>}
            <NavItem className='logout'>
            <Button onClick={logout} color="primary" className="mr-2 btn">Logout</Button>
          </NavItem>
          
          </>
          ) : (
            <>
            
            <NavItem className='login'>
            <Button tag={Link} to="/login" color="primary" className="mr-2 btn">Login</Button>
          </NavItem>
          <NavItem className='sign up'>
            <Button tag={Link} to="/signup" color="secondary"className='mr-2 btn'>Signup</Button>
          </NavItem>
          </>
          )}
          
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
};

export default Header;
