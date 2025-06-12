"use client";
import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa";
import {
  fetchBlogs,
  formatDate,
} from "../../../lib/services/BlogService/BlogsService";
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const BlogCard = ({ post, router }) => {
  const handleCardClick = () => {
    router.push(`/blog-details/${post?.slug}`);
  };

  const getExcerpt = (html, wordCount) => {
    const plainText = html.replace(/<[^>]+>/g, "");
    const words = plainText.split(" ");
    return words.length > wordCount
      ? words.slice(0, wordCount).join(" ") + "..."
      : plainText;
  };
  return (
    <div className="d-flex flex-column"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
        height: "100%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
      }}
      onClick={handleCardClick}
    >
        <img 
        src={`${BASE_IMAGE_URL}/${post?.uploadImage}`}
        />
      <div
        // style={{
        //   height: "220px",
        //   backgroundImage: post.uploadImage
        //     ? `url(${BASE_IMAGE_URL}${post.uploadImage})`
        //     : "url(/assets/Home/educational-impower.webp)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundColor: "#f8f8f8",
        //   position: "relative",
        // }}
      >
        {post.blogCategory && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "rgba(132, 27, 45, 0.9)",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <FaTag style={{ marginRight: "4px", fontSize: "0.7rem" }} />
            {post.blogCategory}
          </span>
        )}
      </div>

      <div
        style={{
          padding: "24px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#666",
            fontSize: "0.875rem",
            marginBottom: "12px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaCalendarAlt style={{ marginRight: "8px", color: "#841B2D" }} />
            {formatDate(post.createdAt)}
          </div>
          {post.publishedBy && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaUser style={{ marginRight: "6px", color: "#841B2D" }} />
              {post.publishedBy}
            </div>
          )}
        </div>

        <h5
          style={{
            color: "#333",
            marginBottom: "12px",
            cursor: "pointer",
            lineHeight: "1.4",
            flexGrow: 1,
          }}
        >
          {post.blogTopic}
        </h5>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
            lineHeight: "1.6",
          }}
        >
          {getExcerpt(post.blogDescription)}
        </p>

        <div
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
          style={{
            color: "#841B2D",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            marginTop: "auto",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#6a1624";
            e.currentTarget.style.transform = "translateX(4px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#841B2D";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          Read More
          <FaArrowRight style={{ marginLeft: "8px", fontSize: "0.8rem" }} />
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
