import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Link from "react-router-dom/Link";
import mn from '../memorizenotes.png';

const Home = () => {
    return (  
        <div>
            <Container style={{height: "200px"}}>
                <Row xs={1} md={1} className="mt-5">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Explore tools that accelerate your <span style={{color: "#AAF"}}>musical learning</span></h1>
                </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundColor: "rgba(0,0,0,0.05)", height: "600px"}}>
                <Container>
                <Row xs={1} md={1} className="mt-5">
                    <Col>
                        <Link to="/memorizenotes"><img src={mn} width="100px" /></Link>
                    </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
 
export default Home;