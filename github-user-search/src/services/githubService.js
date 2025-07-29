import axios from 'axios';

export async function fetchUserData(username, token) {
  try {
    const headers = token ? { Authorization: `token ${token}` } : {};
    const url = `https://api.github.com/search/users?q=${encodeURIComponent(username)}`;
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    throw error;
  }
}

export async function advancedUserSearch({ username, location, minRepos }, token) {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    throw error;
  }
}



