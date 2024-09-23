import "./Blog.css";
import travelBlogsData from "../../data/travelBlogsData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className="blogs-main-container">
        <div className="blog-banner-container">
          <div className="blog-banner-content">
            <h1 className="blog-banner-heading">Travel Blogs</h1>
            <span>Write your memories here</span>
          </div>
        </div>
        <h1 className="travel-blog-heading-main">
          Travel Blogs By Our Travelers
        </h1>
        <div className="blogs-container">
          {travelBlogsData.map((blogData) => {
            return (
              <div key={blogData.id} className="blog-card" data-aos="zoom-in" data-aos-duration="2000">
                <img
                  src={blogData.placeImage}
                  alt={blogData.alternateText}
                  height={260}
                  width={340}
                />
                <div className="blog-card-content">
                  <div className="blog-card-header">
                    <span>{blogData.bloggerName}</span>
                    <span>#{blogData.placeVisted}</span>
                    <span>{blogData.vistedDate}</span>
                  </div>
                  <div>
                    <span>{blogData.blogContent}</span>
                  </div>
                  <div>
                    <button type="button" className="btn btn-primary">
                      read more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
