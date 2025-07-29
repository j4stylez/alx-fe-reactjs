import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const searchGitHubUsers = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: username }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    return [];
  }
};
