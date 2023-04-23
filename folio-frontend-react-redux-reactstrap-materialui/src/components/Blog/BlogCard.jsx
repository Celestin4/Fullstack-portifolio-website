import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { title, subtitles, imageUrl, likes, comments, shares, views } = blog;
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <p>{subtitles}</p>
        <CardImg top width="100%" src={imageUrl} alt={title} />

        <div className="d-flex justify-content-center align-items-center">
          <div>
            <FaHeart className="mr-2" />
            {likes}
            <FaComment className="ml-3 mr-2" />
            {comments}
            <FaShare className="ml-3 mr-2" />
            {shares}
          </div>
          <div>{views} views</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
