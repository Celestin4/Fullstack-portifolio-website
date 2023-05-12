import React from "react";
import { nanoid } from "nanoid";
import ProjectCard from "./ProjectCard";
import projects from "./portfolio_data";
import { Row, Col } from 'reactstrap';
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <Row className='row'>
        <Col className='portfolio_section_description'>
          <h1>My Portfolio</h1>
          <p>I have developed different projects starting from my portfolio website <br />
           If you want to see all of my project not listed here vist my Github</p>
        </Col>
      </Row>
      <Row className="projects">
        {projects.map((project) => (
          <Col key={nanoid()} md ={4}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
