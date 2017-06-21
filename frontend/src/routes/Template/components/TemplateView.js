import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron,Button } from 'reactstrap'
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
<div>
    <body className="test">
          <Navbar light>
            <NavbarToggler onClick={this.toggleNavbar} className="toggler" />
            <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
              <NavbarBrand href="/" className="myNav" >Ngonsarn</NavbarBrand>
              <Nav className="myNav" navbar>
                <NavItem>
                  <NavLink href="/components/">งานสอน</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">งอนสาน</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">kuykuy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">About Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        
          <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
        

    </body>
    </div>
    )
  }
}

export default TemplateView
