// services/authService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const sendVerificationEmail = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/send-verification`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const resetPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/auth/reset-password`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};