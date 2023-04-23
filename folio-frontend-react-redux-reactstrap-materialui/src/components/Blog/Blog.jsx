import React from "react";
import { Row, Col } from "reactstrap";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
import BlogCard from "./BlogCard";
import blogs from "./blog_data";
import "./blog.scss"

SwiperCore.use([Navigation]);

const Blog = () => {
  return (
    <div className= 'blog'>
      <Row className='row'>
        <Col className='blog_section_description'>
          <h1>Blog</h1>
          <p>I have developed different projects starting from my portifolio website <br />
           If you want to see all of my project not listed here vist my Github</p>
        </Col>
      </Row>
      <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        breakpoints={{
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default Blog