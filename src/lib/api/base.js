import axios from 'axios';
import { API_BASE_URL } from '../config';

// Get list of Lead Actions for a given Lead
export function getRequest(params) {
  const url = `${API_BASE_URL}`;
  return axios.get(url)
    .then(response => response.data)
    .catch((error) => {
      console.log('error', error);
      logout();
    });
}
