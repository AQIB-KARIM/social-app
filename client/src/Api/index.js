import axios from "axios";

const baseUrl = 'http://localhost:5000/posts';

// Get Posts
export const fetchPosts = () => axios.get(baseUrl);

// Create Posts
export const createPosts = (inputData) => axios.post(baseUrl,inputData)