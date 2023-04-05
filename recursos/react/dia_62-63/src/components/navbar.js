
import { Link } from 'react-router-dom'
import routes from '../config/routes'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,Button
} from 'reactstrap';
function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar  
    color="dark"
    dark>
        <NavbarBrand href="/" className="me-auto">
        <img
        alt="logo"
        src="logo.png"
        style={{
          height: 75,
          width: 150
        }}
      />
          <strike>     POKEDEX</strike><h1 style={{ paddingLeft: 150}}>DIGIDEX</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">
              
              {routes.map((route) => (
          
            <Button className="boton" >
            <Link style={{ margin: 100 ,     cursor: 'pointer',  textDecoration : 'none',color : 'black'}} to={route.path}>{route.title}</Link>
            </Button>
            
        ))}
              
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;

        
      