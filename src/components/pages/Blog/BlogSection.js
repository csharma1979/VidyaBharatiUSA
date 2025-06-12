"use client";
import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaSearch,
  FaUser,
  FaTag,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../../commonComp/LoadingSpinner";
import {
  fetchBlogs,
  formatDate,
} from "../../../lib/services/BlogService/BlogsService";
import BlogCard from "./BlogCard"

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const Typography = ({ variant, children, style, paragraph }) => {
  const getStyleForVariant = () => {
    switch (variant) {
      case "h1":
        return { fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" };
      case "h2":
        return {
          fontSize: "2.5rem",
          fontWeight: "600",
          marginBottom: "0.75rem",
        };
      case "h4":
        return { fontSize: "2rem", fontWeight: "600", marginBottom: "0.5rem" };
      case "h5":
        return {
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
        };
      case "body1":
        return {
          fontSize: "1rem",
          lineHeight: "1.5",
          marginBottom: paragraph ? "1rem" : "0",
        };
      case "body2":
        return {
          fontSize: "0.875rem",
          lineHeight: "1.5",
          marginBottom: paragraph ? "0.5rem" : "0",
        };
      default:
        return {};
    }
  };

  return (
    <div style={{ ...getStyleForVariant(), ...style }}>
      {children}
    </div>
  );
};

const PageBanner = ({ title, subtitle, titleStyle, subtitleStyle }) => (
  <div
    style={{
      background: "linear-gradient(135deg, #841B2D 0%, #6a1624 100%)",
      padding: "80px 0",
      textAlign: "center",
      color: "white",
    }}
  >
    <div className="container">
      <Typography
        variant="h1"
        style={{ ...titleStyle, color: "white", marginBottom: "16px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        style={{ ...subtitleStyle, color: "white", fontSize: "1.2rem" }}
      >
        {subtitle}
      </Typography>
    </div>
  </div>
);

// Dummy BlogCard for display — update based on your actual design
// const BlogCard = ({ post, router }) => (
//   <div
//     style={{
//       border: "1px solid #ddd",
//       borderRadius: "12px",
//       padding: "20px",
//       background: "white",
//     }}
//   >
//     <img
//       src={`${BASE_IMAGE_URL}/${post.uploadImage}`}
//       alt={post.blogTopic}
//       style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
//     />
//     <Typography variant="h5" style={{ marginTop: "12px" }}>
//       {post.blogTopic}
//     </Typography>
//     <Typography variant="body2" paragraph>
//       {post.blogDescription.replace(/<[^>]+>/g, "").slice(0, 100)}...
//     </Typography>
//     <button
//       style={{
//         marginTop: "12px",
//         padding: "10px 16px",
//         backgroundColor: "#841B2D",
//         color: "white",
//         border: "none",
//         borderRadius: "8px",
//         cursor: "pointer",
//       }}
//       onClick={() => router.push(`/blog-details/${post?.slug}`)}
//     >
//       Read More <FaArrowRight style={{ marginLeft: "8px" }} />
//     </button>
//   </div>
// );

// Main BlogSection
const BlogSection = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getExcerpt = (html, wordCount) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };

  const getBlogs = async () => {
    setLoading(true);
    try {
      const blogsData = await fetchBlogs();
      setBlogs(blogsData);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const categories = [
    "All",
    "Digital Marketing",
    "Technology",
    "Management",
    "Strategy",
    "SEO",
    "Artifical Intelligence",
  ];

  const filteredPosts = blogs.filter((post) => {
    const title = post.blogTopic || "";
    const excerpt = getExcerpt(post.blogDescription || "", 20);
    const category = post.blogCategory || "";

    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <>
        <PageBanner
          title="Our Blog"
          subtitle="Stay Updated with Our Latest News and Stories"
        />
        <div className="container" style={{ padding: "100px 0" }}>
          <LoadingSpinner />
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Stay Updated with Our Latest News and Stories"
      />

      <div className="container" style={{ padding: "64px 0" }}>
        {/* Search */}
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "500px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "2px solid #ccc",
            }}
          />
        </div>

        {/* Categories */}
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              style={{
                padding: "10px 16px",
                backgroundColor:
                  selectedCategory === category.toLowerCase()
                    ? "#841B2D"
                    : "#f5f5f5",
                color:
                  selectedCategory === category.toLowerCase()
                    ? "white"
                    : "#333",
                border: "1px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "32px",
            }}
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} router={router} />
            ))}
          </div>
        ) : (
          <Typography
            variant="h5"
            style={{ textAlign: "center", marginTop: "48px", color: "#999" }}
          >
            No articles found.
          </Typography>
        )}
      </div>
    </>
  );
};

export default BlogSection;
