import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";




const Header = () => {
    return (
        <div className='header'>

            <Navbar expand="lg" variant='light'>
                <Container>
                    <Link style={{ textDecoration: 'none', marginRight: '20%' }} to='/'>
                        <Navbar.Brand style={{ fontSize: '35px', fontFamily: 'cursive' }}>Book A Klean
                            <span className='subtitle'>855-Klean | NYC & Chicago</span>
                        </Navbar.Brand>
                    </Link>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">



                        <Nav className="me-auto">

                            <Link style={{ textDecoration: 'none' }} to='/clean-types'>
                                <Nav.Link href='/clean-types'>Clean Types</Nav.Link>

                            </Link>



                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <Link style={{ textDecoration: 'none' }} to='/home-cleaning'>
                                    <NavDropdown.Item href='/home-cleaning'>Home Cleaning</NavDropdown.Item>

                                </Link>
                                <Link style={{ textDecoration: 'none' }} to='/office-cleaning'>
                                    <NavDropdown.Item href="/office-cleaning">
                                        Office Cleaning
                                    </NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action/3.3">UV Disinfection</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link href="#link">Become a Cleaner</Nav.Link>
                            <Nav.Link href="#link">Safety Protocols</Nav.Link>
                            <Nav.Link href="#link">FAQ</Nav.Link>
                            <Button variant="outline-primary">Login</Button>


                        </Nav>



                    </Navbar.Collapse>


                </Container>

            </Navbar>




        </div>

    )
}

export default Header