// blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, createPost, updatePost, deletePost } from './blogService';

// Define the initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching blog posts
export const fetchPostsAsync = createAsyncThunk('blog/fetchPosts', async (_, thunkAPI) => {
  try {
    const posts = await fetchPosts();
    return posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Create an async thunk for creating a new blog post
export const createPostAsync = createAsyncThunk('blog/createPost', async (postData, thunkAPI) => {
  try {
    const post = await createPost(postData);
    return post;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Create an async thunk for updating an existing blog post
export const updatePostAsync = createAsyncThunk('blog/updatePost', async (postData, thunkAPI) => {
  try {
    const updatedPost = await updatePost(postData);
    return updatedPost;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Create an async thunk for deleting a blog post
export const deletePostAsync = createAsyncThunk('blog/deletePost', async (postId, thunkAPI) => {
  try {
    await deletePost(postId);
    return postId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Create the blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePostAsync.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const index = state.posts.findIndex((post) => post.id === updatedPost.id);
        if (index !== -1) {
          state.posts[index] = updatedPost;
        }
        state.loading = false;
      })
      .addCase(updatePostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePostAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePostAsync.fulfilled, (state, action) => {
        const postId = action.payload;
        state.posts = state.posts.filter((post) => post.id !== postId);
        state.loading = false;
      })
      .addCase(deletePostAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the action creators
export const {} = blogSlice.actions;

// Export the reducer
export default blogSlice.reducer;