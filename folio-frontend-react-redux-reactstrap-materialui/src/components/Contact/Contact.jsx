import {Col, Row, Container} from 'reactstrap'
import ContactForm from "./ContactForm/ContactForm"
import BusinessInfo from "./BusinessInfo/BusinessInfo"
import "./contact.scss"

const Contact = () => {
  return (
    <Container className='contactMe' id="contact">

      <Row className='row'>
          <Col className='blog_section_description'>
            <h1>Contact Me</h1>
            <p>I have developed different projects starting from my portifolio website <br />
            If you want to see all of my project not listed here vist my Github</p>
          </Col>
      </Row>

      <Row className="d-flex justify-content-around">
        
        <Col md={6}>
          <ContactForm />
        </Col>

        <Col md={4}>
          <BusinessInfo />
        </Col>
      </Row>

    </Container>
  )
}

export default contact