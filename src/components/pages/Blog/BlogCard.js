import React from "react";
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa";
import { formatDate } from "../../../lib/services/BlogService/BlogsService";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const BlogCard = ({ post, router }) => {
  const handleCardClick = () => router.push(`/blog-details/${post?.slug}`);

  const getExcerpt = (html, wordCount = 25) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };

  return (
    <div className="blog-card" onClick={handleCardClick}>
      <img src={`${BASE_IMAGE_URL}/${post?.uploadImage}`} alt={post.blogTopic} />
      {post.blogCategory && (
        <span className="blog-category">
          <FaTag />
          {post.blogCategory}
        </span>
      )}
      <div className="card-content">
        <div className="blog-meta">
          <span>
            <FaCalendarAlt /> {formatDate(post.createdAt)}
          </span>
          {post.publishedBy && (
            <span>
              <FaUser /> {post.publishedBy}
            </span>
          )}
        </div>
        <h5>{post.blogTopic}</h5>
        <p>{getExcerpt(post.blogDescription)}</p>
        <div className="read-more" onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}>
          Read More <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
