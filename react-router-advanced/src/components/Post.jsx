// src/components/Post.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch post');
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading) return <div>Loading post...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Post {postId}</h1>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => navigate('/posts/' + (parseInt(postId) + 1))}>
            Next Post
          </button>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}

export default Post;