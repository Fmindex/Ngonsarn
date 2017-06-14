import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DuckImage from '../assets/Duck.jpg'
import './TemplateView.scss'

export const TemplateView = () => (
  <Navbar color="faded" light toggleable>
    <NavbarToggler right onClick={this.toggle} />
    <NavbarBrand href="/">reactstrap</NavbarBrand>
    <Collapse navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
)

export default TemplateView
