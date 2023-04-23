import React, { useEffect, useState } from 'react';
import { Progress } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './skillBar.scss';

const SkillBar = ({ skill, progress }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsAnimated(true);
  }, []);

  return (
    <div className="skill-bar" data-aos="fade-up">
      <div className="skill-name">{skill}</div>
      <Progress value={progress} className={isAnimated ? 'animated' : ''} />
      <div className={`progress-value ${isAnimated ? 'animated' : ''}`}>
        {progress}%
      </div>
    </div>
  );
};

export default SkillBar;
