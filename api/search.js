import axios from 'axios';

export const getSearchResult = async (criteria) => {
  try {
    const result = await axios.post('/api/search', criteria);
    return result.data;
  } catch (error) {
    return error;
  }
};

export const getSearchMeta = async () => {
  try {
    const response = await axios.get('/api/search/meta');
    return response.data;
  } catch (error) {
    return error;
  }
};
