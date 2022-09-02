import React, { useState } from 'react'
import './Home.css'
import { BsQuestionCircleFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { RiLeafFill } from "react-icons/ri";
import { TbSquaresFilled } from "react-icons/tb";
import { BiRightArrowAlt } from "react-icons/bi";



import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contents from '../../../assets/content.json'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

    const [content, setContent] = useState(contents)
    console.log('content--->', content)
    return (
        <div>
            <div className='home'>
                <div className='homeBox'>
                    <div className='title'>
                        <h1 className='mainHeading'>We make homes clean,safe,healthy.</h1>

                        <span className='subHeading'><BsQuestionCircleFill /> Need Help Choosing a Clean Type?</span>
                    </div>

                    <div className='listDiv'>


                        <ListGroup className='list'>
                            <Form.Select size="lg" className='firstDropdown1'>
                                <option>ALL</option>
                                <option>CHI</option>
                                <option>NYC</option>

                            </Form.Select>
                            <Form.Select size="lg" className='firstDropdown1'>
                                <option>Studio</option>
                                <option>1 bedroom</option>
                                <option>2 bedroom</option>
                                <option>3 bedroom</option>
                                <option>4 bedroom</option>
                                <option>5 bedroom</option>


                            </Form.Select>
                            <Form.Select size="lg" className='dropdown1'>
                                <option>ALL</option>
                                <option>CHI</option>
                                <option>NYC</option>

                            </Form.Select>
                            <Form.Select size="lg" className='dropdown1'>
                                <option>ALL</option>
                                <option>CHI</option>
                                <option>NYC</option>

                            </Form.Select>
                        </ListGroup>

                        <div>
                            <Button className='button' style={{ backgroundColor: '#5C4AD9' }} size="lg">
                                Book from
                            </Button>
                        </div>



                    </div>
                </div>

                <div className='caption'>
                    <span><BsStar /> All cleaners are bonded & insured</span>
                    <span><TiTick /> Trained with our checklists</span>
                    <span><RiLeafFill /> Bring & use green products</span>
                    <span><TbSquaresFilled /> Non-toxic UV treatments</span>


                </div>


            </div>


            <div style={{ backgroundColor: '#63ead3' }}>
                <div className='content'>

                    <h1 style={{ textAlign: 'center' }}>
                        {content.Home.Header}
                    </h1>

                    <hr />
                    <p className='homePara'>
                        {content.Home.content}
                    </p>
                    <p className='homePara'>
                        {content.Home.content2}
                    </p>
                    <p className='homePara'>
                        {content.Home.content3}
                    </p>
                    <p className='homePara'>
                        {content.Home.content4}
                    </p>


                </div>
                <div style={{ marginLeft: '43%' }}>
                    <Button style={{ backgroundColor: '#5C4AD9' }} size="lg">
                        Our Safety Protocols
                    </Button>
                </div>

                <hr />
            </div>

            <div className='row'>
                <div>
                    <h2 style={{ color: '#4535DA' }}>
                        <span>How It Works</span>
                    </h2>
                </div>
                <div className='service'>


                    <div className='serviceContent'>
                        {/* <img src='/1.svg' /> */}

                        <img src='/calendar.svg' />
                        <h3>Schedule us</h3>



                        <p>We're available every day of the week with cleans beginning as early as 8am.</p>

                    </div>

                    <div className='serviceContent'>
                        {/* <img src='/1.svg' /> */}

                        <img src='/bell.svg' />
                        <h3>Let us in</h3>



                        <p>Provide entry instructions and we'll be there!</p>

                    </div>
                    <div className='serviceContent'>
                        {/* <img src='/1.svg' /> */}

                        <img src='/duster.svg' />
                        <h3>We Clean</h3>



                        <p>We rigorously execute on our checklists. Our cleaners are trained to uphold the MyClean quality.</p>

                    </div>
                    <div className='serviceContent'>
                        {/* <img src='/1.svg' /> */}

                        <img src='/smile-blue.svg' />
                        <h3>Give Feedback</h3>



                        <p>How'd we do? Answer our one question survey (or if you like, provide more detail).</p>

                    </div>
                    <div className='serviceContent'>
                        {/* <img src='/1.svg' /> */}

                        <img src='/hand-cleaning.svg' />
                        <h3>Rinse & repeat</h3>



                        <p>Schedule recurring cleans to keep your place always healthy, clean, and fresh.</p>

                    </div>










                </div>
            </div>
            <hr />

            <div>
                <h4 style={{ textAlign: 'center', marginTop: '3%', color: '#4535DA' }}>Featured In</h4>
            </div>
            <marquee width="100%" direction="left" height="100px">
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '3%' }}>
                    <img src={'/business-insider.png'} />
                    <img src={'/time-out.png'} />
                    <img src={'/wsj.png'} />
                    <img src={'crains.png'} />
                    <img src={'bloomberg.png'} />
                    <img src={'thrillist.png'} />
                </div>
            </marquee>

            <div style={{ marginTop: '5%' }}>
                <div style={{ backgroundColor: '#25215E', display: 'flex', justifyContent: 'center' }}>
                    <img style={{ marginTop: '5%' }} src='/spray-bottle-white.svg' />

                </div>

                <Carousel className='w-100'>


                    <Carousel.Item className='slider'>
                        {/* <div style={{marginTop:'60%'}}> */}
                        <h3>{content.Home.feedback1}</h3>
                        <p>{content.Home.feedback1Name}</p>
                        {/* </div> */}

                    </Carousel.Item>
                    {/* <Carousel.Item className='slider'>
                        {/* <div style={{marginTop:'60%'}}> */}
                    {/* <h3>{content.Home.feedback2}</h3> */}
                    {/* <p>{content.Home.feedback2Name}</p> */}
                    {/* </div> */}
                    {/* </Carousel.Item>  */}
                    <Carousel.Item className='slider'>
                        {/* <div style={{marginTop:'60%'}}> */}
                        <h3>{content.Home.feedback3}</h3>
                        <p>{content.Home.feedback3Name}</p>
                        {/* </div> */}
                    </Carousel.Item>

                </Carousel>


            </div>
            <div style={{ display: 'flex' }}>
                <div className='offers'>
                    <h1 style={{ width: '70%', marginLeft: '10%' }}>Are you a commercial space?</h1>
                    <span style={{ marginLeft: '10%' }}>Learn More About Our offering <BiRightArrowAlt /></span>

                </div>
                <div style={{ width: '60%' }}>
                    <img src='commercial.jpg' style={{ height: '75vh', width: '100%' }} />
                </div>
            </div>
            <div className='hiring'>
                <div className='reviews'>
                    <div style={{ textAlign: 'center' }}>
                        <img src='/star.svg' />
                        <img src='/star.svg' />
                        <img src='/star.svg' />
                        <img src='/star.svg' />
                        <img src='/half-star.svg' />

                    </div>
                    <br />
                    <span style={{ textAlign: 'center' }}>4.6/5 Stars! Based on 1000+ reviews</span>
                    <br />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='/yelp.png' />
                        <img src='/thumbtack.svg' />
                        <img src='/google.svg' />
                        <hr />

                    </div>


                </div>
                <hr />

                <div className='reviews'>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src='/smile.svg' />
                        </div>
                        <h1 style={{ textAlign: 'center', color: '#4535DA' }}>We're Hiring</h1>
                        <span>Interested in working with us? Learn more about our process, benefits, and flexible scheduling.</span>
                        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'center' }}>
                            <Button className='applyButton' style={{ backgroundColor: '#5C4AD9' }} size="lg">
                                Apply Now
                            </Button>
                        </div>


                    </div>

                </div>

            </div>
            <hr />
            <div className='lastPart'>
                <div style={{ padding: '45px', display: 'flex', justifyContent: 'center' }}>
                    <img src='/hand-cleaning.svg' />

                    <img style={{ marginLeft: '5%', marginRight: '5%' }} src='/spray-blue.svg' />

                    <img src='/duster-blue.svg' />
                </div>
                <div>
                    <h2 style={{ textAlign: 'center' }}>We are here for you.</h2>
                    <h1 style={{ textAlign: 'center' }}>Book your clean today.</h1>
                </div>
                <span className='subHeading1'><BsQuestionCircleFill /> Need Help Choosing a Clean Type?</span>


                <div className='listDiv1'>


                    <ListGroup className='list'>
                        <Form.Select size="lg" className='firstDropdown1'>
                            <option>ALL</option>
                            <option>CHI</option>
                            <option>NYC</option>

                        </Form.Select>
                        <Form.Select size="lg" className='firstDropdown1'>
                            <option>Studio</option>
                            <option>1 bedroom</option>
                            <option>2 bedroom</option>
                            <option>3 bedroom</option>
                            <option>4 bedroom</option>
                            <option>5 bedroom</option>


                        </Form.Select>
                        <Form.Select size="lg" className='dropdown1'>
                            <option>ALL</option>
                            <option>CHI</option>
                            <option>NYC</option>

                        </Form.Select>
                        <Form.Select size="lg" className='dropdown1'>
                            <option>ALL</option>
                            <option>CHI</option>
                            <option>NYC</option>

                        </Form.Select>



                    </ListGroup>
                    <div>
                        <Button className='button' style={{ backgroundColor: '#5C4AD9' }} size="lg">
                            Book from
                        </Button>
                    </div>





                </div>



            </div>





        </div>

    )
}

export default Home