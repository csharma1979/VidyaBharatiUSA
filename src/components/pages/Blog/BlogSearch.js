import React from "react";

const BlogSearch = ({ value, onChange }) => (
  <div className="blog-search">
    <input
      type="text"
      placeholder="Search articles..."
      value={value}
      onChange={onChange}
    />
  </div>
);

export default BlogSearch;
