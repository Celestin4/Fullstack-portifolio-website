import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./blogCard.scss"
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { title, subtitles, imageUrl, likes, comments, shares, views } = blog;
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <p>{subtitles}</p>
        <CardImg top width="100%" src={imageUrl} alt={title} />

        <div className="d-flex justify-content-center align-items-center user-actions">
            <span>
              <FaHeart className="" />
              {likes}
            </span>

            <span>
              <FaComment className="" />
              {comments}
            </span>
            
            <span>
              <FaShare className="" />
              {shares}
            </span>

            <span>
            views {views}
            </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
