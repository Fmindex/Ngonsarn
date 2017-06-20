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
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const show = true;
    return (
    <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
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
  }
}

export default TemplateView
