// reducers.js
import {
    LIKE_POST,
    SHARE_POST,
    COMMENT_ON_POST,
    VIEW_POST
  } from './actionTypes';
  
  const initialState = {
    posts: []
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case LIKE_POST:
        // Find the post in state.posts array and update the like count
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload.postId) {
              return {
                ...post,
                likes: post.likes + 1
              };
            }
            return post;
          })
        };
      case SHARE_POST:
        // Find the post in state.posts array and update the share count
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload.postId) {
              return {
                ...post,
                shares: post.shares + 1
              };
            }
            return post;
          })
        };
      case COMMENT_ON_POST:
        // Find the post in state.posts array and add the comment
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload.postId) {
              return {
                ...post,
                comments: [...post.comments, action.payload.comment]
              };
            }
            return post;
          })
        };
      case VIEW_POST:
        // Find the post in state.posts array and update the view count
        return {
          ...state,
          posts: state.posts.map(post => {
            if (post.id === action.payload.postId) {
              return {
                ...post,
                views: post.views + 1
              };
            }
            return post;
          })
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  