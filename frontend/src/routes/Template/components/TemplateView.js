import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Button, Container, Form, FormGroup, Label, Input } from 'reactstrap'
import SideNav, {MenuIcon} from 'react-simple-sidenav'
import './TemplateView.scss'
import HeadBackground from '../assets/bg1.jpg'


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
    var backgroundHead = {
      backgroundImage : "url("+ HeadBackground +")",
      width: "100%",
      height: "100%"
    };
    return (
    <body>
        <MenuIcon onClick={() => this.setState({showNav: true})}/>
          <SideNav
              showNav        =  {this.state.showNav}
              onHideNav      =  {() => this.setState({showNav: false})}
              title          =  "Hello World"
              items          =  {['home', 'services', 'about', 'contact']}
              titleStyle     =  {{backgroundColor: '#4CAF50'}}
              itemStyle      =  {{backgroundColor: '#fff'}}
              itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
              />






      <div style={backgroundHead} className="head">
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
          <Container fluid className="block-center">
            <Form>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUrl">Url</Label>
                <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleNumber">Number</Label>
                <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDatetime">Datetime</Label>
                <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleColor">Color</Label>
                <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
              </FormGroup>
            </Form>
          </Container>
      </div>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
        
      
    </body>
    )
  }
}

export default TemplateView
