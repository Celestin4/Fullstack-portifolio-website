const asyncHandler = require('express-async-handler');
const Blog = require("../Models/blogSchema")

const createBlog = async (req, res) => {
  try {
    const { title, subtitles, imageUrl } = req.body;
    const newBlog = await Blog.create({ title, subtitles, imageUrl });
    res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getBlogs = asyncHandler( async(req, res) => {
  const blogs = await Blog.find()
    console.log('The server is working correctly');
    res.json(blogs);
  })

const updateBlog = asyncHandler( async(req, res) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, 
      {
        new: true
      })
    res.send(updatedBlog);
  })

const deleteBlog = asyncHandler( async(req, res) => {
await Blog.findByIdAndDelete(req.params.id);
    res.json(req.params.id);
  })

module.exports = {
    createBlog,
    deleteBlog,
    updateBlog,
    getBlogs

}