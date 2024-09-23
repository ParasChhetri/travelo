import "./Home.css";
import popularDestination from "../../data/popularDestination";
import testimonialData from "../../data/testimonialData";
import Marquee from "react-fast-marquee";
import fiveStarsImage from '../../assets/images/five-stars-removebg-preview.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      disable : "phone",
      duration : 700,
      easing: "ease-out-cubic"
    })
  }, [])
  return (
    <>
      <div className="Home-main-container">
        <div className="main-container-image">
          <div className="main-container-image-content">
            <h1 className="image-content-heading">India</h1>
            <p className="image-content-text">A nation of greate wonders</p>
            <button type="button" className="btn btn-white">
              Explore Now
            </button>
          </div>
        </div>
        <div className="search-container">
          <h1 className="text-white">Where do you want to go?</h1>
          <div className="user-input-search">
            <form>
              <div>
                <input type="text" placeholder="Destination" />
              </div>
              <div>
                <input type="date" />
              </div>
              <div>
                <input type="text" placeholder="Travel Type" />
              </div>
            </form>
            <div className="search-btn-container">
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="popular-destination-container">
          <h1 className="text-white" data-aos="fade-up"  data-aos-duration="5000">Popular destination</h1>
          <p className="text-white" data-aos="fade-up"  data-aos-duration="3000">
            India is home to a diverse range of popular travel destinations,
            each offering unique cultural, historical, and natural
            experiences.The vibrant city of Jaipur, part of the "Golden
            Triangle," is famous for its royal palaces and forts, such as the
            Amber Fort and the City Palace.The beaches of Goa, with their
            laid-back atmosphere and lively nightlife, attract both local and
            international tourists. India's rich tapestry of history, nature,
            and spirituality makes it a must-visit for travelers from all walks
            of life.
          </p>
        </div>
        <div className="popular-destination-card-container">
          {popularDestination.map((destinations) => {
            return (
              <div key={destinations.id} className="destination-card" data-aos="flip-right"  data-aos-duration="3000">
                <div>
                  <img src={destinations.desinationImage} alt="" />
                </div>
                <div className="desination-btn-container">
                  <h4>{destinations.destinationName}</h4>
                  <button type="button" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="testimonial-container">
          <Marquee>
            {testimonialData.map((testimonial) => {
              return (
                <div className="testimonial-card" key={testimonial.id}>
                  <div>
                    <img src={testimonial.image} alt="" height={50} />
                    <span>{testimonial.name}</span>
                  </div>
                  <span>
                    <img src={fiveStarsImage} alt="" height={40}/>
                  </span>
                  <span>{testimonial.reviewDate}</span>
                  <span className="text-align-justify">
                    {testimonial.review}
                  </span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Home;
