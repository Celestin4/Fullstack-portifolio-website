import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as portfolioService from './portfolioService';

// Fetch all portfolios
export const fetchPortfolios = createAsyncThunk(
  'portfolio/fetchPortfolios',
  async (_, { rejectWithValue }) => {
    try {
      const portfolios = await portfolioService.fetchPortfolios();
      return portfolios;
    } catch (error) {
      return rejectWithValue('Failed to fetch portfolios');
    }
  }
);

// Create a new portfolio
export const createPortfolio = createAsyncThunk(
  'portfolio/createPortfolio',
  async (portfolioData, { rejectWithValue }) => {
    try {
      const portfolio = await portfolioService.createPortfolio(portfolioData);
      return portfolio;
    } catch (error) {
      return rejectWithValue('Failed to create portfolio');
    }
  }
);

// Update an existing portfolio
export const updatePortfolio = createAsyncThunk(
  'portfolio/updatePortfolio',
  async ({ portfolioId, portfolioData }, { rejectWithValue }) => {
    try {
      const portfolio = await portfolioService.updatePortfolio(portfolioId, portfolioData);
      return portfolio;
    } catch (error) {
      return rejectWithValue(`Failed to update portfolio with ID ${portfolioId}`);
    }
  }
);

// Delete a portfolio
export const deletePortfolio = createAsyncThunk(
  'portfolio/deletePortfolio',
  async (portfolioId, { rejectWithValue }) => {
    try {
      await portfolioService.deletePortfolio(portfolioId);
      return portfolioId;
    } catch (error) {
      return rejectWithValue(`Failed to delete portfolio with ID ${portfolioId}`);
    }
  }
);

// Portfolio slice
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolios: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolios = action.payload;
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolios.push(action.payload);
      })
      .addCase(createPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePortfolio.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPortfolio = action.payload;
        const index = state.portfolios.findIndex((portfolio) => portfolio.id === updatedPortfolio.id);
        if (index !== -1) {
          state.portfolios[index] = updatedPortfolio;
        }
      })
      .addCase(updatePortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePortfolio.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePortfolio.fulfilled, (state, action) => {
        state.loading = false;
        const deletedPortfolioId = action.payload;
        state.portfolios = state.portfolios.filter((portfolio) => portfolio.id !== deletedPortfolioId);
      })
      .addCase(deletePortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
