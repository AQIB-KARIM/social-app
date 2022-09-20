import React from 'react'
import './Header.scss';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/img/logo.jpg'

const Header = () => {
    return (
        <div className='bg_container'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} alt='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className='ml-auto'>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Username"
                                menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
