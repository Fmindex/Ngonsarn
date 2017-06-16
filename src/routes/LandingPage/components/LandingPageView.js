import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DuckImage from '../assets/Duck.jpg'
import './LandingPageView.scss'

class LandingView extends Component {

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
      <div>
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
        <div>
          <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
        </div>
      </div>
    )
  }
}

export default LandingView
