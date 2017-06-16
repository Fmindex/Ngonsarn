import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DuckImage from '../assets/Duck.jpg'
import './TemplateView.scss'

class TemplateView extends Component {

  renderComponent() {
    const show = true;
    if(show) {
      return (
        <div>
          dasdasdsa
        </div>
      )
    } else {
      return (
        <p>no</p>
      )
    }
  }

  render() {
    const show = true;
    return (
      <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">{show == true ? "reactstrap" : "this is false"}</NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/"></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            {this.renderComponent()}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }
}

export default TemplateView
