// actions.js
import {
    LIKE_POST,
    SHARE_POST,
    COMMENT_ON_POST,
    VIEW_POST
  } from './actionTypes';
  
  export const likePost = (postId) => {
    return {
      type: LIKE_POST,
      payload: {
        postId
      }
    };
  };
  
  export const sharePost = (postId) => {
    return {
      type: SHARE_POST,
      payload: {
        postId
      }
    };
  };
  
  export const commentOnPost = (postId, comment) => {
    return {
      type: COMMENT_ON_POST,
      payload: {
        postId,
        comment
      }
    };
  };
  
  export const viewPost = (postId) => {
    return {
      type: VIEW_POST,
      payload: {
        postId
      }
    };
  };
  