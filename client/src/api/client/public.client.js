import axios from "axios";
import queryString from "query-string";

// baseURL should be the URL of the server where the API is hosted 
const baseURL = "https://moonflix-api.vercel.app/api/v1/";

// Create a new axios instance with a custom config.
const publicClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

// Add a request interceptor to add the Authorization header to all requests.
publicClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

publicClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default publicClient;