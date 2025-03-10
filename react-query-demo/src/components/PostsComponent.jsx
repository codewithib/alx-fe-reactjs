import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes (300,000ms)
    staleTime: 60 * 1000, // Mark data as fresh for 1 minute
    refetchOnWindowFocus: false, // Prevent auto-refetching when window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
