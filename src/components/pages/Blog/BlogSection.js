"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageBanner from "../../layout/PageBanner";
import BlogSearch from "./BlogSearch";
import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogCard from "./BlogCard";
import LoadingSpinner from "../../commonComp/LoadingSpinner";
import { fetchBlogs } from "../../../lib/services/BlogService/BlogsService";
import { Container } from "@mui/material";

const BlogSection = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const blogsData = await fetchBlogs();
        setBlogs(blogsData);
      } catch (err) {
        setError("Failed to load blogs.");
      }
      setLoading(false);
    };
    getBlogs();
  }, []);

  const filteredPosts = blogs.filter((post) => {
    const title = post.blogTopic || "";
    const excerpt = (post.blogDescription || "").replace(/<[^>]+>/g, "");
    const category = post.blogCategory || "";
    return (
      (title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "all" ||
        category.toLowerCase() === selectedCategory.toLowerCase())
    );
  });

  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Stay Updated with Our Latest News and Stories"
      />

      <Container className="blog-container">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <BlogSearch
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BlogCategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
            />
            <div className="blog-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <BlogCard key={post._id} post={post} router={router} />
                ))
              ) : (
                <div className="no-blogs">No articles found.</div>
              )}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default BlogSection;
