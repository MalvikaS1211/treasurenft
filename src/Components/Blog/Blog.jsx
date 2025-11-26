import React from "react";
import { Link } from "react-router-dom";
import FooterNew from "../Common/Footer";
import Header from "../Common/Header";
import Blogbg1 from "../../assets/BlogBg1.jpg";
import BlogBg2 from "../../assets/BlogBg2.jpg";
import blogbg3 from "../../assets/blogbg3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Building a Winning NFT Portfolio in Virtual Mine",
    excerpt:
      "Virtual Mine is more than just an NFT marketplace—it’s a strategic ecosystem designed for long-term growth and financial success. To maximize your profits, you need to build a strong NFT portfolio that balances value appreciation, passive income, and trading opportunities.",
    date: "Mar 23, 2025",
    thumbnail: Blogbg1,
  },
  {
    id: 2,
    title: "How Virtual Mine Creates a Sustainable NFT Economy",
    excerpt:
      "The NFT space has revolutionized digital ownership, but sustainability remains a challenge for many platforms. Virtual Mine has developed an innovative approach to ensure long-term value, continuous earnings, and a thriving NFT ecosystem.",
    date: "Mar 24, 2025",
    thumbnail: BlogBg2,
  },

  {
    id: 3,
    title: "How Virtual Mine Ensures Continuous NFT Growth & Market Expansion",
    excerpt:
      "Virtual Mine is not just an NFT platform—it’s an evolving ecosystem designed for sustainable growth and continuous market expansion. Unlike traditional NFT marketplaces where assets may lose value over time, Virtual Mine introduces a structured resale mechanism, automated price appreciation, and multiple income streams to keep the ecosystem thriving.  ",
    date: "Mar 25, 2025",
    thumbnail: blogbg3,
  },

  {
    id: 4,
    title: "How NFTs Are Revolutionizing Digital Art & Virtual Assets  ",
    excerpt:
      "The rise of NFTs (Non-Fungible Tokens) has transformed the world of digital art and virtual assets. From empowering artists to redefining ownership, NFTs are shaping a new era in the digital economy. But what makes them so revolutionary? Let’s explore.  ",
    date: "Mar 25, 2025",
    thumbnail: blogbg3,
  },

  {
    id: 5,
    title: "Virtual Mine NFT Resale Model: How Your NFT Grows in Value",
    excerpt:
      "Virtual Mine introduces a unique NFT resale model that ensures continuous growth in value with each transaction. Unlike traditional NFT platforms where prices fluctuate based on market trends, Virtual Mine guarantees systematic appreciation in NFT prices, making it a sustainable and profitable ecosystem for creators, traders, and investors.  ",
    date: "Mar 25, 2025",
    thumbnail: blogbg3,
  },
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <section className="front-blog">
        <div className="content-container">
          <div className="front-blog-top">
            <h2 className="front-blog-title dec-title">
              <span>
                <i className="bi bi-journal-text"></i>
              </span>{" "}
              Latest Posts
            </h2>
            <a className="btn-Fx" href="#">
              <span>
                View Blog <i className="bi bi-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="front-blog-list">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                className="front-blog-item article-blog"
                to={`/blog/${post.id}`}
              >
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  style={{ backgroundImage: `url(${post.thumbnail})` }}
                ></div>
                <div className="front-blog-item-content article__body">
                  <div>
                    <h3 className="article__title">{post.title}</h3>
                  </div>
                  <div className="article__excerpt">
                    <p style={{ fontSize: "15px", color: "black" }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <footer className="article__footer">
                    <span className="article__date">{post.date}</span>
                    <div className="footer__readmore">
                      <span className="footer__readmore-text">Read more</span>
                      <span className="footer__readmore-arrow">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </footer>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FooterNew />
    </>
  );
};

export default BlogPage;
