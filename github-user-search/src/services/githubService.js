import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export async function advancedUserSearch({ username, location, minRepos }, token) {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`, {
      headers,
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
}
