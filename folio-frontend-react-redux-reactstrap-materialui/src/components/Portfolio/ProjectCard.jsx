import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import RatingStars from 'react-rating-stars-component';
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import './projectCard.scss';

const ProjectCard = ({ id, imageUrl, title, githubLink }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)
  const handleRating = (value) => {
    if(!user) {
      navigate("/login");
    }
    setRating(value);
  };

  return (
    <Card key={id} className="card">
      <CardImg top className="cardImage" src={imageUrl} alt={title} />
      <CardBody className="cardBody">
        <CardTitle className="cardTitle">{title}</CardTitle>
        <div className="project-actions">
          <div className="rating-text">Rate it:</div>
          <RatingStars
            count={5}
            value={rating}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            onChange={handleRating}
          />
          <a href={githubLink}>Github Link</a>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
