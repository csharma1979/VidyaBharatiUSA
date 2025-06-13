import React from "react";

const categories = [
  "All",
  "Digital Marketing",
  "Technology",
  "Management",
  "Strategy",
  "SEO",
  "Artificial Intelligence",
];

const BlogCategoryFilter = ({ selectedCategory, onSelectCategory }) => (
  <div className="blog-categories">
    {categories.map((category) => (
      <button
        key={category}
        className={
          selectedCategory === category.toLowerCase() ? "active" : ""
        }
        onClick={() => onSelectCategory(category.toLowerCase())}
      >
        {category}
      </button>
    ))}
  </div>
);

export default BlogCategoryFilter;
