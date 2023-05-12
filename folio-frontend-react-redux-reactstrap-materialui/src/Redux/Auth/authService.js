import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('api/users/login',
        { email, password },

        {
        headers: {
          'Content-Type': 'application/json'
        }
      }
        );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (email, password) => {
  try {
    const response = await axios.post('api/users/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
