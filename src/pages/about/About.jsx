import './About.css';
import happyPeopleImage from '../../assets/images/about_images/happy-people.jpeg';
import worldImage from '../../assets/images/about_images/world-image.jpg';
import travelAbstractImage from '../../assets/images/about_images/travel-abstract.avif';
import guideImage from '../../assets/images/about_images/guid-image.jpg';
import memoryLaneImage_01 from '../../assets/images/about_images/memory-lane-image-01.jpg'
import memoryLaneImage_02 from '../../assets/images/about_images/memory-lane-image-02.avif';
import switzerlandImage from '../../assets/images/about_images/switzerland.jpg';
import memoryLaneImage_03 from '../../assets/images/about_images/switzerland-5k-town-swiss-alps-wallpaper-preview.jpg';
import australiaImage from '../../assets/images/about_images/australia.jpg';
import austrailaFlagImage from '../../assets/images/about_images/australia-02.jpg';
import kangarooImage from '../../assets/images/about_images/kangaroo.avif';
import australiaTrackingSiteImage from '../../assets/images/about_images/australia-03.jpg'

import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
const About = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <>
            <div className='about-main-container'>
                <div className="about-banner-container">
                    <div className="about-banner-content">
                        <h1 className='about-banner-content-heading'>About Us</h1>
                    </div>
                </div>
                <div className='about-us-container'>
                    <h1 className='text-white text-uppercase text-center'>our story</h1>
                    <p className='text-white text-align-justify'>
                        At Travelo, we believe that travel is more than just visiting new places; it’s about immersing yourself in new cultures, creating lasting memories, and discovering a world of possibilities. Our mission is to make travel accessible and enjoyable for everyone, whether you're a solo adventurer, a family on vacation, or a couple seeking a romantic getaway. With carefully crafted itineraries, handpicked destinations, and insider tips, we make sure your journey is not just a trip but a life-changing experience.
                    </p>
                    <p className='text-white text-align-justify'>
                        Our team of passionate travel experts is dedicated to bringing you the best in travel. From the bustling streets of Tokyo to the serene beaches of Bali, we curate experiences that suit every traveler’s taste and budget. We work closely with local guides and experts to ensure you gain authentic insights and unique encounters at every destination. Whether you're looking to explore off-the-beaten-path locations or the world’s iconic landmarks, we are here to make your travel dreams come true.
                    </p>
                    <p className='text-white text-align-justify'>
                        At the heart of what we do is a commitment to personalized service and customer satisfaction. We understand that every traveler is unique, so we offer customizable travel packages to fit your individual needs and preferences. Our easy-to-use platform provides seamless booking, detailed travel guides, and 24/7 support to make your journey as smooth as possible. With Travelo, you’re not just booking a trip; you’re embarking on an unforgettable adventure.
                    </p>
                </div>
                <div className='sucess-story-container'>
                    <div className='sucess-story'>
                        <img src={happyPeopleImage} alt="..." height={120} width={200} />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <p className='counting-UI'>
                                <span>
                                    {
                                        counterOn && <CountUp start={0} end={350000} duration={2} delay={0} className='fs-1' />
                                    }
                                </span>
                                <span className='fs-1 fw-bold'> +</span>
                            </p>
                        </ScrollTrigger>
                        <h3 className='text-uppercase'>happy customes</h3>
                    </div>
                    <div className='sucess-story'>
                        <img src={travelAbstractImage} alt="..." height={120} width={200} />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <p className='counting-UI'>
                                <span>
                                    {
                                        counterOn && <CountUp start={0} end={12000} duration={2} delay={0} className='fs-1' />
                                    }
                                </span>
                                <span className='fs-1 fw-bold'> +</span>
                            </p>
                        </ScrollTrigger>
                        <h3 className='text-uppercase'>trips</h3>
                    </div>
                    <div className='sucess-story'>
                        <img src={guideImage} alt="..." height={120} width={200} />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <p className='counting-UI'>
                                <span>
                                    {
                                        counterOn && <CountUp start={0} end={1200} duration={2} delay={0} className='fs-1' />
                                    }
                                </span>
                                <span className='fs-1 fw-bold'> +</span>
                            </p>
                        </ScrollTrigger>
                        <h3 className='text-uppercase'>travel guides</h3>
                    </div>
                    <div className='sucess-story'>
                        <img src={worldImage} alt="..." height={120} width={200} />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <p className='counting-UI'>
                                <span>
                                    {
                                        counterOn && <CountUp start={0} end={90} duration={2} delay={0} className='fs-1' />
                                    }
                                </span>
                            </p>
                        </ScrollTrigger>
                        <h3 className='text-uppercase'>countries</h3>
                    </div>
                </div>
                <div className='memory-lane-container'>
                    <h1 className='text-center text-white text-uppercase pb-5'>memory lane</h1>
                    <div className='memory-lane-image-conatiner'>
                        <div className='memory-lane-image-row pb-2'>
                            <div className='image-30'>
                                <img src={memoryLaneImage_01} alt="..." />
                            </div>
                            <div className='middle-image'>
                                <div className='image-40'>
                                    <img src={memoryLaneImage_02} alt="..." />
                                </div>
                                <div className='image-40'>
                                    <img src={switzerlandImage} alt="..." />
                                </div>
                            </div>
                            <div className='image-30'>
                                <img src={memoryLaneImage_03} alt="..." />
                            </div>
                        </div>
                        <div className="memory-lane-image-row">
                            <div className='middle-image'>
                                <div className='image-40'>
                                    <img src={austrailaFlagImage} alt="..." />
                                </div>
                                <div className='image-40'>
                                    <img src={australiaImage} alt="..." />
                                </div>
                            </div>
                            <div className='image-30'>
                                <img src={kangarooImage} alt="..." />
                            </div>
                            <div className='image-30'>
                                <img src={australiaTrackingSiteImage} alt="..." />
                            </div>
                        </div>
                        <div className='agencies-container'>
                            <h1 className='text-white text-uppercase text-center'>our agencies</h1>
                            <p className='text-white text-align-justify'>
                                Welcome to Travelo, your trusted travel partner for unforgettable journeys across India and beyond. We specialize in crafting personalized travel experiences that cater to every type of traveler, from adventure seekers and culture enthusiasts to families and solo explorers. Our dedicated team of travel experts ensures a hassle-free, memorable trip by taking care of all your travel needs, including customized itineraries, comfortable accommodations, and seamless transportation. With our deep knowledge of popular and off-the-beaten-path destinations, we promise you a journey filled with rich experiences, local insights, and lifelong memories. Whether you're dreaming of exploring the majestic forts of Rajasthan, cruising through Kerala's serene backwaters, or relaxing on the sun-kissed beaches of Goa, Travelo is here to turn your travel dreams into reality.
                            </p>
                            <div className="agencies-inner-container">
                                <div>
                                    <h2 className='text-white text-capitalize'>mohali branch</h2>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6860.222355724933!2d76.7081523427971!3d30.71527474837064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee60515a29e5%3A0x3913d7d59e75c14d!2sPhase%205%2C%20Sector%2059%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1726424023570!5m2!1sen!2sin" title='mohali branch'
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div>
                                    <h2 className='text-white text-capitalize'>chandigrah branch</h2>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11536.871542286846!2d76.7521515732127!3d30.720299901766875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb4947478a9%3A0x671e7e0d9897f527!2s34D%2C%20Sector%2034%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1726424784263!5m2!1sen!2sin" title='chandigrah brnach'
                                        width={600}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
