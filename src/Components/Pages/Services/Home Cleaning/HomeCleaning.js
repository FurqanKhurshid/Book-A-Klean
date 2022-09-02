import React, { useState } from 'react'
import './HomeCleaning.css'
import '../../../Footer/Footer.css'
import contents from '../../../../assets/content.json'
import Button from 'react-bootstrap/Button';
import { BiRightArrowAlt } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel';


const HomeCleaning = () => {
    const [content, setContent] = useState(contents)
    return (

        <div className='homeCleaning'>
            <div className='cleaninghero'>



            </div>
            <div className='hero-bk-holder'>
                <div className='text'>
                    <h1 style={{ color: 'darkblue', fontSize: '50px' }}>Let your home shine.</h1>
                    <p>{content.Services.HomeCleaningpara1}</p>
                    <p>{content.Services.HomeCleaningpara2}</p>
                    <Button style={{ backgroundColor: '#5C4AD9' }} size="lg">
                        Book Now
                    </Button>



                </div>


            </div>
            <div className='clean-details'>
                <div className='left-side'>
                    <h1 style={{ color: 'white' }}>
                        We sweat the details
                    </h1>
                    <p>
                        On top of the standard features, we will go the extra mile to get your place looking fantastic. Just ask for a deep clean, or mark your individual needs in the booking process.
                    </p>
                </div>
                <div className='right-side'>
                    <div className='add-item'>
                        <img src='/fridge-white.svg' style={{ marginRight: '25px' }} />
                        <div className='meta'>
                            <span className='add-on'>Inside Fridge</span>
                            <br />
                            <span className='price'>$35</span>

                        </div>
                    </div>
                    <div className='add-item'>
                        <img src='/oven-white.svg' style={{ marginRight: '25px' }} />
                        <div className='meta'>
                            <span className='add-on'>Inside Oven</span>
                            <br />
                            <span className='price'>$35</span>

                        </div>
                    </div>
                    <div className='add-item'>
                        <img src='/cabinets-white.svg' style={{ marginRight: '25px' }} />
                        <div className='meta'>
                            <span className='add-on'>Inside Cabinets</span>
                            <br />
                            <span className='price'>$35</span>

                        </div>
                    </div>
                    <div className='add-item'>
                        <img src='/time-white.svg' style={{ marginRight: '25px' }} />
                        <div className='meta'>
                            <span className='add-on'>Extra Time</span>
                            <br />
                            <span className='price'>50% more time with Standard+
                                150% more time with Deep</span>

                        </div>
                    </div>



                </div>


            </div>
            <div className='moving'>
                <div style={{ opacity: '0.5' }}>

                    <img className='movingImage' src='./moving-house-packing-tips.jpg' />



                </div>
                <div>
                    <div className='movingDiv'>
                        <div className='movingChildDiv'>
                            <h1 style={{ color: '#16374b', marginBottom: '20px' }}>Moving?</h1>
                            <p>{content.Services.movingpara}</p>
                            <p>Learn More About Our offering <BiRightArrowAlt /></p>
                        </div>
                    </div>


                </div>


            </div>
            <div style={{ backgroundColor: '#25215E' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ marginTop: '5%' }} src='/duster.svg' />

                </div>

                <Carousel className='w-1001'>

                    <Carousel.Item style={{ marginTop: '10%' }}>
                        {/* <div style={{marginTop:'60%'}}> */}
                        <h3>{content.Home.feedback1}</h3>
                        <p>{content.Home.feedback1Name}</p>
                        {/* </div> */}

                    </Carousel.Item>
                    <Carousel.Item style={{ marginTop: '10%' }}>
                        {/* <div style={{marginTop:'60%'}}> */}
                        <h3>{content.Home.feedback2}</h3>
                        <p>{content.Home.feedback2Name}</p>
                        {/* </div> */}
                    </Carousel.Item>
                    <Carousel.Item style={{ marginTop: '10%' }}>
                        {/* <div style={{marginTop:'60%'}}> */}
                        <h3>{content.Home.feedback3}</h3>
                        <p>{content.Home.feedback3Name}</p>
                        {/* </div> */}
                    </Carousel.Item>
                </Carousel>


            </div>
            <div className='closingSection'>
                <div className='icon'>
                    <img src='/book-white.svg' />

                </div>

                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '60px', marginBottom: '60px' }}>Ready for more ‘you’ time?
                    Sign up today.
                </h1>

                <Button style={{ backgroundColor: '#262626' }} size="lg">
                    Book A Cleaning
                </Button>


            </div>


        </div>








    )
}

export default HomeCleaning