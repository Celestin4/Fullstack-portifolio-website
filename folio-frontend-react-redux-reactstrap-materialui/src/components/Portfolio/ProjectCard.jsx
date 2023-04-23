import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import './projectCard.scss';

const ProjectCard = ({ id, imageUrl, title, githubLink }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <Card key={id} className="card">
      <CardImg top className="cardImage" src={imageUrl} alt={title} />
      <CardBody className="cardBody">
        <CardTitle className="cardTitle">{title}</CardTitle>
        <div className="project-actions">
          <div className="rating-text">Rate this work:</div>
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
