import axios from 'axios';

const API_URL = '/api/portfolio'; // Replace with your API URL

// Fetch all portfolios
export const fetchPortfolios = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch portfolios');
  }
};

// Create a new portfolio
export const createPortfolio = async (portfolioData) => {
  try {
    const response = await axios.post(API_URL, portfolioData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create portfolio');
  }
};

// Update an existing portfolio
export const updatePortfolio = async (portfolioId, portfolioData) => {
  try {
    const response = await axios.put(`${API_URL}/${portfolioId}`, portfolioData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update portfolio with ID ${portfolioId}`);
  }
};

// Delete a portfolio
export const deletePortfolio = async (portfolioId) => {
  try {
    await axios.delete(`${API_URL}/${portfolioId}`);
  } catch (error) {
    throw new Error(`Failed to delete portfolio with ID ${portfolioId}`);
  }
};
