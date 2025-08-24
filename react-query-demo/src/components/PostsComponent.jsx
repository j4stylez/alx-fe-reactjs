// src/components/PostsComponent.jsx
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchPosts = async ({ queryKey }) => {
  const [, { page, limit }] = queryKey;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return response.data;
};

function PostsComponent() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts', { page, limit }],
    queryFn: fetchPosts,
    keepPreviousData: true, // Keep previous data while fetching new data
    staleTime: 1000 * 60 * 5, // 5 minutes stale time
    cacheTime: 1000 * 60 * 10, // 10 minutes cache time
    refetchOnWindowFocus: false, // Disable refetching on window focus
  });

  const handleRefetch = () => {
    refetch();
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const prefetchNextPage = () => {
    queryClient.prefetchQuery({
      queryKey: ['posts', { page: page + 1, limit }],
      queryFn: fetchPosts,
      staleTime: 1000 * 60 * 5, // Match staleTime for consistency
      cacheTime: 1000 * 60 * 10, // Match cacheTime for consistency
    });
  };

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Posts</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={handleRefetch}
          disabled={isFetching}
          style={{ marginRight: '1rem' }}
        >
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          style={{ marginRight: '1rem' }}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          onMouseEnter={prefetchNextPage}
        >
          Next Page
        </button>
        <span style={{ marginLeft: '1rem' }}>Page: {page}</span>
      </div>

      {data && data.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((post) => (
            <li
              key={post.id}
              style={{
                border: '1px solid #ddd',
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: '4px',
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default PostsComponent;
