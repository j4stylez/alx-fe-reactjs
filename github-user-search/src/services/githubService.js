import axios from 'axios';

export async function fetchUserData(username, token) {
  try {
    const headers = token ? { Authorization: `token ${token}` } : {};

    // Use GitHub Search Users API endpoint returning multiple users
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(username)}`;

    const response = await axios.get(url, { headers });

    return response.data.items; // array of user objects
  } catch (error) {
    throw error;
  }
}


