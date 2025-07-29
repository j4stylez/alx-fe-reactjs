import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export async function fetchUser(username, token) {
  try {
    const headers = token
      ? { Authorization: `token ${token}` }
      : {};

    const response = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
}
