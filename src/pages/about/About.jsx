import './About.css';

const About = () => {
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
            </div>
        </>
    );
}

export default About;
