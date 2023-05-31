import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import myphot from "../../assets/image/PROFILE PICTURE 1.png"
import "./hello.scss"

const Hello = () => {
  return (
    <Container fluid className="hello_section" id="hello">
      <Row className='row'>
        <Col md="6" className='hello_text_column'>
          <h2>Hello,</h2>
          <h1>I'm Celestin</h1>
          <h2>Fullstack developer</h2>
          <p>
          I driven by sharpen and competetive edge of your business. A responsive website is my choice to you
          </p>
          <div className="resume">
            <Button color="primary" className="download_resume"><FontAwesomeIcon icon={faDownload} className="download_icon"/>Resume</Button>
          </div>
        </Col>

        <Col md="6" className='hello_image_column'>
          <div className="img_circle">
          <img src={myphot} alt="my profile"/>
          </div>
        </Col>
      </Row>
  </Container>
  )
}

export default Hello