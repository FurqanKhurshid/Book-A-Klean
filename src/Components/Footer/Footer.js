import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='Footer'>
            {/* <Navbar bg='dark' variant='dark' expand="lg">

                <Container>
                    <Navbar.Brand style={{ fontSize: '35px' }} href="#home">Book A Klean
                        <span className='subtitle'>855-Klean | NYC & Chicago</span>

                    </Navbar.Brand>
                    <div>
                        <img src='spray-bottle-white.svg' />
                        <img src='pan-blue.svg' />
                        <img src='hanger-blue.svg' />
                        <img src='duster-grey.svg' />
                    </div>
                  


                </Container>
                <hr style={{ color: 'blue' }} />

            </Navbar> */}



            <div style={{backgroundColor:'#63ead3'}}>


                <div style={{ display: 'flex', justifyContent: 'space-evenly',flexWrap:'wrap' }}>
                    <div style={{marginTop:'3%'}}>
                        <Link style={{textDecoration:'none'}} to='/'>
                            <h1 style={{color:'black'}}>Book A Klean</h1>
                            <span style={{textAlign:'center',color:'black'}}>855-Klean | NYC & Chicago</span>

                        </Link>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column',marginTop:'5%' }}>
                        <h5>We make homes clean, safe, healthy.</h5>
                       
                    </div>
                    <div style={{marginTop:'1%'}}>

                        <ul style={{ listStyleType: 'none' }}>
                            <h5>The Goods</h5>
                            <li>About us</li>
                            <li>Contact Us</li>
                            <li>Become A Cleaner</li>
                            <li>Blog</li>
                        </ul>
                    </div>


                    <div style={{marginTop:'1%'}}>

                        <ul style={{ listStyleType: 'none' }}>
                            <h5>Our Services</h5>
                            <li>Home Cleaning</li>
                            <li>Office Cleaning</li>
                            <li>50 point checklist</li>
                        </ul>

                    </div>
                    <div style={{marginTop:'1%'}}>

                        <ul style={{ listStyleType: 'none' }}>
                            <h5>Connect</h5>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>

                    </div>
                </div>
                <div style={{ display:'flex',justifyContent:'center'}}>
                    <span>
                        Copyright &copy; 2022 K-Clean.All rights reserved | Terms of services | Privacy Policy
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer