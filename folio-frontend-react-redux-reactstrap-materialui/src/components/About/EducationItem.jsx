import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './educationItem.scss';

const EducationItem = ({ institution, field }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="education-item" data-aos="fade-up" data-aos-duration="1000">
        <h2>{field}</h2>
        <p>{institution}</p>
      </div>
    </>
  );
};

export default EducationItem;
