import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Notegenerator from '../components/Notegenerator';
import mn from '../memorizenotes.png';
const Memorizenotes = () => {
    return (
        <Container className="text-center">
            <h1 className="mt-5"><img src={mn} width="75px" /> Memorize Notes!</h1>
            <p style={{paddingTop: 50}}>Memorize Notes! is a random note generator. Set a tempo, and click start to begin generating random notes.</p>
            <Notegenerator/>
        </Container>
      );
}
 
export default Memorizenotes;