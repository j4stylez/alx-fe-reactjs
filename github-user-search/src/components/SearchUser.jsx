import { useState } from 'react';
import { searchGitHubUsers } from '../services/github';

function SearchUser() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      const results = await searchGitHubUsers(query);
      setUsers(results);
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>
        Search
      </button>

      <div style={{ marginTop: '20px' }}>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: '10px' }}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img src={user.avatar_url} alt={user.login} width="50" style={{ borderRadius: '50%' }} />
              <span style={{ marginLeft: '10px' }}>{user.login}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchUser;
