import React from 'react';
import { Row, Col} from 'reactstrap';
import EducationItem from './EducationItem';
import education from "./education_data"
import SkillBar from './SkillBar';
import skills from './skills_data';
import SocialMedia from './SocialMedia';

import "./about_me.scss"

const About = () => {
  return (
    <div className="container-fluid about_me" id="about">

      <Row className='row'>
        <Col className='about_me_description'>
          <h1>About Me</h1>
          <p>My Name is NTEZIRYAYO Celestin, Fullstack developer. <br />
            I spark joy in writting clear, dry and logical codes</p>
        </Col>
      </Row>

    <Row>
      <Col md="5" className="column-1">
      <h3 className='d-flex justify-content-center'>Education</h3>
      <Row>
        {education.map((edu, i) => (
          <EducationItem key={i} institution={edu.institution} field={edu.field} />
        ))}
      </Row>
      </Col>

      <Col md="2" className="column-2">
        <h3 className='d-flex justify-content-center'>Media</h3>
        <SocialMedia />
      </Col>

      <Col md="5" className="column-3">
      <h3 className='d-flex justify-content-center'>Skills</h3>
      <Row>
        {skills.map((skill, i) => (
          <SkillBar key={i} skill={skill.skill} progress={skill.progress} />
        ))}
      </Row>
      </Col>
    </Row>

  </div>
  )
}

export default About