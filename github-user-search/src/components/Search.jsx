import React, { useState } from 'react';
import { fetchUserData, advancedUserSearch } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
      let users = [];

      if (location.trim() !== '' || minRepos.trim() !== '') {
        // Use advanced search with filters
        users = await advancedUserSearch({ username, location, minRepos }, token);
      } else {
        // Use simple search by username only
        users = await fetchUserData(username, token);
      }

      setResults(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          className="w-full p-2 border rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          min="0"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 grid gap-4">
        {results.length === 0 && !loading && !error && (
          <p className="text-center text-gray-500">No results to display</p>
        )}

        {results.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  View Profile
                </a>
              </p>
              {user.score && <p>Score: {user.score.toFixed(2)}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;




