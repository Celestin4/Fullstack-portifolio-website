const express = require("express")
const router = express.Router()
const {
    createBlog,
    getBlogs,
    updateBlog,
    deleteBlog
} = require('../controllers/blogsControllers.js')

router.route('/').get(getBlogs).post(createBlog);
router.route('/:id').put(updateBlog).delete(deleteBlog);



  module.exports =  router;
