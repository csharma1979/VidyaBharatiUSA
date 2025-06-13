"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { FaCalendarAlt, FaArrowLeft, FaUser, FaTag } from "react-icons/fa";
import PageBanner from "../../layout/PageBanner";
import axios from "axios";
import LoadingSpinner from "../../commonComp/LoadingSpinner";
import { Container, Typography } from "@mui/material";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_API_URL;

const BlogDetails = () => {
  const router = useRouter();
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slug = params?.slug;

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const response = await axios.get(`/api/blog/${slug}`);

        setArticle(response.data);
      } catch (error) {
        setError("Failed to load article.");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getBlogDetails();
    }
  }, [slug]);

  // Format date function
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !article) {
    return (
      <>
        <PageBanner
          title="Article Not Found"
          subtitle="The article you're looking for doesn't exist"
          titleStyle={{ color: "white" }}
          subtitleStyle={{ color: "white" }}
        />
        <Container
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "#841B2D", marginBottom: "16px" }}
          >
            Article Not Found
          </Typography>
          <Typography variant="body1" paragraph>
            {error ||
              "The article you're looking for doesn't exist or has been removed."}
          </Typography>
          <button
            onClick={() => router.push("/blog")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "#841B2D",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "500",
              marginTop: "16px",
            }}
          >
            <FaArrowLeft style={{ marginRight: "8px" }} /> Back to All Articles
          </button>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageBanner
        title={article.blogTopic}
        subtitle={`Category: ${article.blogCategory || "Education"}`}
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
      />

      <Container style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <button
          onClick={() => router.push("/blog")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#841B2D",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "500",
            marginBottom: "32px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#6a1624";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#841B2D";
          }}
        >
          <FaArrowLeft style={{ marginRight: "8px" }} /> Back to All Articles
        </button>

        {/* Main Article */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            marginBottom: "48px",
          }}
        >
          {article?.uploadImage && (
            <img
              src={`${BASE_IMAGE_URL}/${article?.uploadImage}`}
              alt={article.blogTopic}
              width={1200}
              height={600}
              className="blog-hero-image"
              priority
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          )}

          <div style={{ padding: "32px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#666",
                fontSize: "1rem",
                marginBottom: "16px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCalendarAlt style={{ marginRight: "8px" }} />
                {formatDate(article.createdAt)}
              </div>

              {article.publishedBy && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaUser style={{ marginRight: "8px" }} />
                  {article.publishedBy}
                </div>
              )}

              {article.blogCategory && (
                <span
                  style={{
                    backgroundColor: "#f0e9ea",
                    color: "#841B2D",
                    padding: "4px 12px",
                    borderRadius: "16px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaTag style={{ marginRight: "6px" }} />
                  {article.blogCategory}
                </span>
              )}
            </div>

            <Typography
              variant="h4"
              style={{ color: "#333", marginBottom: "24px" }}
            >
              {article.blogTopic}
            </Typography>

            <div
              className="article-content"
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#333",
              }}
              dangerouslySetInnerHTML={{ __html: article.blogDescription }}
            />

            {/* Tags Section */}
            {article.keywords && article.keywords.length > 0 && (
              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <Typography
                  variant="body1"
                  style={{ marginBottom: "12px", fontWeight: "500" }}
                >
                  Tags:
                </Typography>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {article.keywords.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        padding: "4px 12px",
                        borderRadius: "16px",
                        fontSize: "0.875rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons */}
            <div
              style={{
                marginTop: "48px",
                paddingTop: "24px",
                borderTop: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                style={{ marginRight: "16px", fontWeight: "500" }}
              >
                Share this article:
              </Typography>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                      "_blank"
                    )
                  }
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#1877f2",
                    color: "white",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  F
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.blogTopic}`,
                      "_blank"
                    )
                  }
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#1da1f2",
                    color: "white",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  T
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
                      "_blank"
                    )
                  }
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0077b5",
                    color: "white",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  L
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: "64px" }}>
            <Typography
              variant="h4"
              style={{
                color: "#333",
                marginBottom: "32px",
                textAlign: "center",
              }}
            >
              You May Also Like
            </Typography>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {relatedArticles.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog-details/${post.slug || post._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0,0,0,0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0,0,0,0.1)";
                    }}
                  >
                    {post.uploadImage && (
                      <div
                        style={{
                          height: "160px",
                          backgroundImage: `url(${BASE_IMAGE_URL}${post.uploadImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    )}

                    <div style={{ padding: "16px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#666",
                          fontSize: "0.875rem",
                          marginBottom: "12px",
                          flexWrap: "wrap",
                          gap: "12px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <FaCalendarAlt
                            style={{ marginRight: "8px", fontSize: "0.75rem" }}
                          />
                          {formatDate(post.createdAt)}
                        </div>
                        {post.blogCategory && (
                          <span
                            style={{
                              backgroundColor: "#f0e9ea",
                              color: "#841B2D",
                              padding: "2px 8px",
                              borderRadius: "12px",
                              fontSize: "0.75rem",
                              fontWeight: "500",
                            }}
                          >
                            {post.blogCategory}
                          </span>
                        )}
                      </div>

                      <Typography
                        variant="h5"
                        style={{
                          color: "#333",
                          marginBottom: "12px",
                          fontSize: "1.25rem",
                        }}
                      >
                        {post.blogTopic}
                      </Typography>

                      <Typography
                        variant="body2"
                        style={{
                          color: "#666",
                          lineHeight: "1.5",
                        }}
                      >
                        {getExcerpt(post.blogDescription, 20)}
                      </Typography>

                      <div
                        style={{
                          marginTop: "16px",
                          display: "inline-flex",
                          alignItems: "center",
                          color: "#841B2D",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                      >
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogDetails;
