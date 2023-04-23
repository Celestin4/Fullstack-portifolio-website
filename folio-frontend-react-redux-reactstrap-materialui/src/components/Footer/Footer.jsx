import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';

const socialIcons = [
  {
    icon: faWhatsapp,
    link: 'https://wa.me/123456789',
    label: 'WhatsApp'
  },
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/your-account',
    label: 'Facebook'
  },
  {
    icon: faFacebook,
    link: 'mailto:your-email@example.com',
    label: 'Email'
  },
  {
    icon: faGithub,
    link: 'https://github.com/your-account',
    label: 'GitHub'
  },
  {
    icon: faFreeCodeCamp,
    link: 'https://www.freecodecamp.org/your-account',
    label: 'FreeCodeCamp'
  }
];

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col md="6" className="text-center text-md-left">
          <p>© Celestin. All rights reserved.</p>
        </Col>
        <Col md="6" className="text-center text-md-right">
          <ul className="list-inline">
            {socialIcons.map(({ icon, link, label }) => (
              <li className="list-inline-item" key={label}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={icon} aria-label={label} />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
