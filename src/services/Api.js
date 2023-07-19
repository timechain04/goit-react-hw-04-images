import axios from 'axios';
const API_KEY = '36502958-cdaae05ea9a7c2e9488e66ded';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const FetchData = async (value, page, perPage) => {
  const response = await axios.get(
    `?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  const responseData = await response.data;
  if (!responseData.total) {
    return Promise.reject(new Error(`No image with name ${value}`));
  }
  return responseData;
};

export default FetchData;
