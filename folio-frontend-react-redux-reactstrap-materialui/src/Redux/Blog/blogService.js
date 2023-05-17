// blogService.js
import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('/api/blog');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post('/api/blog', postData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updatePost = async (postData) => {
  try {
    const response = await axios.put(`/api/blog/${postData.id}`, postData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`/api/blog/${postId}`);
    return postId;
  } catch (error) {
    throw error.response.data;
  }
};
