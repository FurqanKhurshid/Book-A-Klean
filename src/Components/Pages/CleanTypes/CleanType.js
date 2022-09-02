import React, { useState } from 'react'
import './CleanType.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import contents from '../../../assets/content.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';




const CleanType = () => {
    const [content, setContent] = useState(contents)
    console.log('content---<', content);
    return (
        <div className='cleanType'>
            <div className='headingDiv'>
                <h1 className='heading'>We’ve got a clean for<br /> every type of mess.</h1>

            </div>
            <div className='NavTab'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='mb-3'>
                        <Col sm={15} className='TabsStyle'>
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Resedential</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Commercial</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={15}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row xs={1} md={3} className="g-4">
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.ResidentialHeader}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.ResidentialContent1}</li>
                                                            <li>{content.CleanType.ResidentialContent2}</li>
                                                            <li>{content.CleanType.ResidentialContent3}</li>

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Book Now
                                                        </Button>
                                                    </Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.ResidentialHeader2}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.ResidentialContent21}</li>
                                                            <li>{content.CleanType.ResidentialContent22}</li>
                                                            <li>{content.CleanType.ResidentialContent23}</li>
                                                            <li>{content.CleanType.ResidentialContent24}</li>


                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Book Now
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.ResidentialHeader3}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.ResidentialContent31}</li>
                                                            <li>{content.CleanType.ResidentialContent32}</li>
                                                            <li>{content.CleanType.ResidentialContent33}</li>

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Book Now
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.ResidentialHeader4}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.ResidentialContent41}</li>
                                                            <li>{content.CleanType.ResidentialContent42}</li>
                                                            <li>{content.CleanType.ResidentialContent43}</li>

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Book Now
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.ResidentialHeader5}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.ResidentialContent51}</li>
                                                            <li>{content.CleanType.ResidentialContent52}</li>
                                                            {/* <li>{content.CleanType.ResidentialContent53}</li> */}

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Get a Quote
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>








                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row xs={1} md={3} className="g-4">
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.CommercialHeader}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.CommercialContent1}</li>
                                                            <li>{content.CleanType.CommercialContent2}</li>
                                                            <li>{content.CleanType.CommercialContent3}</li>

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Get a Quote
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.CommercialHeader2}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.CommercialContent21}</li>
                                                            <li>{content.CleanType.CommercialConten22}</li>
                                                            {/* <li>{content.CleanType.CommercialContent23}</li> */}

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Get a Quote
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                                                <Card.Header style={{ backgroundColor: '#0AA2E8', color: 'aliceblue' }} className='text-center'>
                                                    <h4>{content.CleanType.CommercialHeader3}</h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    {/* <Card.Title>Card title</Card.Title> */}
                                                    <Card.Text>
                                                        <ol>
                                                            <li>{content.CleanType.CommercialContent31}</li>
                                                            <li>{content.CleanType.CommercialContent32}</li>
                                                            <li>{content.CleanType.CommercialContent33}</li>

                                                        </ol>
                                                        <Button variant='outline-primary' style={{ marginLeft: '35%' }} size="lg">
                                                            Get a Quote
                                                        </Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>



                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div >
    )
}

export default CleanType