import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'

const footer = () => {
  return (
    <footer
    style={{
      width:"100%",
      position:"relative",
      bottom:0,
      display:"flex",
      justifyContent:"center",
      //alignItems:"center",
      //border:"red solid"
    }}>
      <Container>
        <Row>
          <Col className='text-centre py-3'>Copyright &copy; Note Zipper</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
