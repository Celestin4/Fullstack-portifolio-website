import React from "react";
import {useSelector} from "react-redux"
import { useNavigate , Link} from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./blogCard.scss"
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const BlogCard = ({ blog }) => {

  const { title, subtitles, imageUrl, likes, comments, shares, views } = blog;
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)

  const handleLike = () => {
    if(!user) {
      navigate("/login");
    }
  }

  const handleComment = () => {
    if(!user) {
      navigate("/login");
    }
  }

  const handleShare = () => {
    if(!user) {
      navigate("/login");
    }
  }
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <p>{subtitles}</p>
        <CardImg top width="100%" src={imageUrl} alt={title} />

        <div className="d-flex justify-content-center align-items-center user-actions">
            <span>
              <FaHeart className="" onClick = {handleLike}/>
              <Link to = "/" >{likes}</Link>
            </span>

            <span>
              <FaComment className="" onClick = {handleComment}/>
              <Link to = "/" >{comments}</Link>
            </span>
            
            <span>
              <FaShare className="" onClick = {handleShare}/>
              <Link to = "/" >{shares}</Link>
            </span>

            <span>
            views 
            <Link to = "/" >{views} </Link>
            </span>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
