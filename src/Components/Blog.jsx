import React, { useEffect } from "react";
import { BiBook } from "react-icons/bi";
import { LuNotebookText } from "react-icons/lu";
import Header from "./HeaderNew";
import FooterNew from "./FooterNew";
import { FaArrowRight } from "react-icons/fa";
// import "bootstrap-icons/font/bootstrap-icons.css";

const blogPosts = [
  {
    title: " Building a Winning NFT Portfolio in Magic Verse",
    date: "Mar 23, 2025",
    excerpt:
      "Magic Verse is more than just an NFT marketplace—it’s a strategic ecosystem designed for long-term growth and financial success. To maximize your   ...",
    image:
      "https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp",
    link: "#",
  },
  {
    title: "10 Best Web Development Stacks",
    date: "Mar 22, 2025",
    excerpt:
      "When it comes to building a website, choosing the right web development stack is like picking the best ingredients for your signature dish. You want a blend tha...",
    image:
      "https://emilandersson.com/storage/blog-thumbnails/01JPYS2JN0EAM6HDZ704MD17V8.webp",
    link: "#",
  },
  {
    title: "Laravel > Github > Hostinger",
    date: "Mar 18, 2025",
    excerpt:
      "Setting up a Laravel development environment, managing your code with GitHub, and deploying it effortlessly through Hostinger can sound daunting, but it doesn’t...",
    image:
      "https://emilandersson.com/storage/blog-thumbnails/01JPXM7VX6CXKVZ8YRAZ1M05EN.webp",
    link: "#",
  },
  {
    title: "Is CDN Solutions Still Relevant?",
    date: "Mar 23, 2025",
    excerpt:
      "In the fast-paced world of web development, performance is everything. Users expect lightning-fast, seamless experiences, and search engines reward optimized we...",
    image:
      "https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <>
      <Header />
      <section className="front-blog dashboardbg">
        <div className="content-container">
          <div className="front-blog-top">
            <h2 className="front-blog-title dec-title">
              <span>
                <LuNotebookText />
              </span>
              Latest Posts
            </h2>
            <a className="btn-Fx" href="#">
              <span>
                View Blog <FaArrowRight />
              </span>
            </a>
          </div>
          <div className="front-blog-list">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                className="front-blog-item article-blog"
                href={post.link}
              >
                <div
                  className="front-blog-item-thumbnail article__thumbnail"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="front-blog-item-content article__body">
                  <div>
                    <h3 className="article__title">{post.title}</h3>
                  </div>
                  <div className="article__excerpt">
                    <p>{post.excerpt}</p>
                  </div>
                  <footer className="article__footer">
                    <span className="article__date">{post.date}</span>
                    <div className="footer__readmore">
                      <span className="footer__readmore-text">Read more</span>
                      <span className="footer__readmore-arrow">
                        <FaArrowRight />
                      </span>
                    </div>
                  </footer>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <FooterNew />
    </>
  );
};

export default BlogPage;
