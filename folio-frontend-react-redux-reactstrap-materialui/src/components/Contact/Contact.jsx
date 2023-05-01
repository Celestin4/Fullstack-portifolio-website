import {Col, Row, Container} from 'reactstrap'
import ContactForm from "./ContactForm/ContactForm"
import "./contact.scss"

const contact = () => {
  return (
    <Container className='contactMe'>
      <Row className='row'>
          <Col className='blog_section_description'>
            <h1>Contact Me any time</h1>
            <p>I have developed different projects starting from my portifolio website <br />
            If you want to see all of my project not listed here vist my Github</p>
          </Col>
      </Row>

      <Row>
        
        <Col md={8}>
          <ContactForm />
        </Col>
      </Row>

    </Container>
  )
}

export default contact
