import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import NavbarBrandLogo from '../../images/NavbarBrandLogo.png';
import EnglishLanguageIcon from '../../images/EnglishLanguageIcon.png';
import ItalianLanguageIcon from '../../images/ItalianLanguageIcon.jpg';
import FormattedMessage from 'react-intl';
import '../../styles/base/header.css';

class Header extends Component {
  render() {
    return (
    	<div id="Header">
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <img src={NavbarBrandLogo} alt="navBrandLogo" className="img-responsive" />
			    </Navbar.Brand>
			    <Navbar.Toggle />
			  </Navbar.Header>
			  <Navbar.Collapse>
			  <Nav pullRight>
			    <NavItem eventKey={1} href="#">SMS APP</NavItem>
			    <NavItem eventKey={2} href="#">ANDROID APP</NavItem>
			    <NavItem eventKey={3} href="#">FAQ</NavItem>
			    <NavDropdown eventKey={4} title="ENGLISH" id="nav-dropdown" onSelect={function(evt){console.log(evt)}}>
			      <MenuItem eventKey={'en'}><img src={EnglishLanguageIcon} alt="lang_english" className="langFlagIcon" /> ENGLISH</MenuItem>
			      <MenuItem eventKey={'it'}><img src={ItalianLanguageIcon} alt="lang_italian" className="langFlagIcon" /> ITALIAN</MenuItem>
			    </NavDropdown>
			  </Nav>
		    </Navbar.Collapse>
			</Navbar>
		</div>
    );
  }
}

export default Header;
