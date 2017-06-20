import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DuckImage from '../assets/Duck.jpg'
import './TemplateView.scss'

class TemplateView extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const show = true;
    return (
      <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <Collapse navbar isOpen={this.state.isOpen}>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/"></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href=".">Github</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }
}

export default TemplateView
