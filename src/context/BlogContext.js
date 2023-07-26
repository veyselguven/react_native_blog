import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  // const blogPost = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  const [blogPost, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPost, { title: `Blog Post #${blogPost.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
