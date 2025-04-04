import React from "react";

const blogPosts = [
  {
    title: "Is CDN Solutions Still Relevant?",
    excerpt:
      "In the fast-paced world of web development, performance is everything. Users expect lightning-fast, seamless experiences, and search engines reward optimized we...",
    date: "Mar 23, 2025",
    thumbnail:
      "https://emilandersson.com/storage/blog-thumbnails/01JQ1PMBK9TZ02ECBAMG4ZGWYF.webp",
    link: "#",
  },
  {
    title: "10 Best Web Development Stacks",
    excerpt:
      "When it comes to building a website, choosing the right web development stack is like picking the best ingredients for your signature dish. You want a blend tha...",
    date: "Mar 22, 2025",
    thumbnail:
      "https://emilandersson.com/storage/blog-thumbnails/01JPYS2JN0EAM6HDZ704MD17V8.webp",
    link: "#",
  },
  {
    title: "Laravel > Github > Hostinger",
    excerpt:
      "Setting up a Laravel development environment, managing your code with GitHub, and deploying it effortlessly through Hostinger can sound daunting, but it doesn’t...",
    date: "Mar 18, 2025",
    thumbnail:
      "https://emilandersson.com/storage/blog-thumbnails/01JPXM7VX6CXKVZ8YRAZ1M05EN.webp",
    link: "#",
  },
];

const BlogPage = () => {
  return (
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
          {blogPosts.map((post, index) => (
            <a
              key={index}
              className="front-blog-item article-blog"
              href={post.link}
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
                  <p>{post.excerpt}</p>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
