import React from "react";
import { Row, Col } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import BlogCard from "./BlogCard";
import blogs from "./blog_data";
import "./blog.scss"


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
      

      <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}

      </Swiper>
    </>
    </div>
    
  )
}

export default Blog