import React, { useState } from 'react'
import './OfficeCleaning.css'
import Button from 'react-bootstrap/Button';
import contents from '../../../../assets/content.json'
import { TiTick } from "react-icons/ti";

const OfficeCLeaning = () => {
    const [content, setContent] = useState(contents)

    return (
        <div className='officeCleaning'>
            <div className='cleaninghero-office'>



            </div>
            <div className='hero-bk-holder-office'>
                <div className='text-office'>
                    <h1 style={{ color: 'darkblue', fontSize: '50px' }}>A clean office is a productive one.</h1>
                    {/* {/* <p>{content.Services.OfficeCleaningpara1}</p> */}
                    <p>We offer competitive rates for workspaces big and small. Our office cleaning services keep your place looking fresh year round, allowing your team to focus on what's important.</p>
                    <Button style={{ backgroundColor: '#5C4AD9' }} size="lg">
                        Get A Quote
                    </Button>



                </div>


            </div>
            <div className='offer'>

                <div>


                </div>

                <div style={{ marginTop: '4%' }}>

                    <ul style={{ listStyle: 'none' }}><h1>What we offer</h1>
                    <hr />

                        {/* style={{ display: 'flex', justifyContent: 'center' }}> */}


                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer1}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer2}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer3}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer4}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer5}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer6}</li>


                    </ul>

                    <Button style={{ backgroundColor: '#262626', marginLeft: '85%', marginTop: '8%',marginBottom:'3%' }} size="lg">
                        Questions
                    </Button>



                </div>
                <div style={{ marginTop: '10%' }}>
                    <ul style={{ listStyle: 'none' }}>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer7}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer8}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer9}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer10}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer11}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer12}</li>
                        <li><TiTick className='tickButton' />{content.Services.OfficeCleaningOffer13}</li>
                    </ul>
                </div>
            </div>
            <div className='workIndustry'>

                <h3 style={{ textAlign: 'center' }}>We work in every industry</h3>


                <div className='industries'>
                    <ul className='imageList'>
                        <li>
                            <img src='/hanger@2x.png' />
                            <span>Fashion</span>

                        </li>
                        <li>
                            <img src='/retail@2x.png' />
                            <span>Retail</span>

                        </li>
                        <li>
                            <img src='tech@2x.png' />
                            <span>Technology</span>

                        </li>
                        <li>
                            <img src='multi@2x.png' />
                            <span>Multi-purpose</span>

                        </li>
                        <li>
                            <img src='startup@2x.png' />
                            <span>Start ups</span>

                        </li>
                        <li>
                            <img src='/gym@2x.png' />
                            <span>Gym</span>

                        </li>
                        <li>
                            <img src='med@2x.png' />
                            <span>Medical  Offices</span>

                        </li>
                        <li>
                            <img src='yours@2x.png' />
                            <span>Yours</span>

                        </li>
                    </ul>

                </div>

            </div>
            <div className='business'>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4%' }}>
                    <img src='/spray-white.svg' />

                </div>
                <h1 style={{ textAlign: 'center', color: 'aliceblue', fontSize: '8vh', marginTop: '3%' }}>Ready to focus on your
                    business?</h1>
                <div style={{display:'flex',justifyContent:'center',marginTop:'3%',paddingBottom:'3%'}}>
                    <Button style={{ backgroundColor: '#5C4AD9' }} size="lg">
                        Get A Quote
                    </Button>
                </div>

            </div>



        </div>
    )
}

export default OfficeCLeaning