import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './socialMedia.scss'

AOS.init();

const socialMediaDescriptions = [
  {
    name: 'Facebook',
    icon: faFacebookF,
    link: 'https://www.facebook.com/'
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/'
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    link: 'https://www.linkedin.com/'
  },
  {
    name: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/'
  },
  {
    name: 'YouTube',
    icon: faYoutube,
    link: 'https://www.youtube.com/'
  }
];

const SocialMedia = () => {
  return (
    <Row className="social-media-icons">
      {socialMediaDescriptions.map((socialMediaDescription) => (
        <Col key={socialMediaDescription.name} className="social-media-icon" data-aos="fade-up">
          <a href={socialMediaDescription.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={socialMediaDescription.icon} />
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default SocialMedia;
