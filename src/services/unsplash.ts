import axios from 'axios';

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (): Promise<Image[]> => {
  try {
    const response = await axios.get('https://reactexambackend.onrender.com/mission/8780587', {
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};