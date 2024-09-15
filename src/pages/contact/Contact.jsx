import './Contact.css';
import contactUsImage from '../../assets/images/contact-us-removebg-preview.png';
const Contact = () => {
    return (
        <>
            <h2 className="text-center pt-4 text-white">Contact Us</h2>
            <div className='main-branch-container'>
                <h1 className='text-center text-uppercase text-white p-5'>our location</h1>
                <div className='location-container'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215976!3d28.643684626335453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1726428317298!5m2!1sen!2sin" title='main branch'
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className='location-text'>
                    <p className='text-white text-align-justify'>
                        We would love to hear from you! Whether you're ready to book your next adventure, have questions about our travel packages, or need personalized recommendations for your trip, our dedicated team is here to help. At Travelo, we strive to provide exceptional customer service and ensure that every detail of your travel experience is tailored to your preferences. Please fill out the contact form below, and one of our travel experts will get back to you as soon as possible. You can also reach us via phone or email for any urgent inquiries.
                    </p>
                    <p className='text-white text-align-justify'>
                    Your feedback is invaluable to us, and we welcome any suggestions or comments you may have. If you've recently traveled with us, we would love to hear about your experience. Your insights help us continually improve our services and provide the best possible travel experiences to our clients. Thank you for choosing Travelo as your travel partner. We look forward to helping you plan your dream journey and create memories that will last a lifetime!
                    </p>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-white text-capitalize pt-4'>we are listing</h1>
            <div className="contact-main-container">
                <div className='width-less-than-half'>
                    <form className="contact-form-container">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required=""
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                required=""
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="Your Phone Number"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows={4}
                                placeholder="Your Message"
                                required=""
                                defaultValue={""}
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='width-less-than-half'>
                    <img src={contactUsImage} alt="..." height={560} />
                </div>
            </div>
        </>
    );
}

export default Contact;
