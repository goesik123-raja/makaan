import c1 from './img/carousel-1.jpg';
// import b2 from './img/carousel-2.jpg';
import c2 from './img/about.jpg';
import d3 from './img/call-to-action.jpg';



import c6 from './img/property-2.jpg';
import c3 from './img/property-3.jpg';
import c4 from './img/property-4.jpg';
import c5 from './img/property-5.jpg';
import d1 from './img/property-6.jpg';
import d2 from './img/property-1.jpg';



const About = () => {
    return (
        <>
            <div className="about-hero">
                <div className="abt">
                    <div className="abt-1">
                        <h1>About Us</h1>
                        <p>Home/page/About</p>
                    </div>
                </div>

                <div className='abc'>
                    <div className='abc-1'>
                        <img src={c2} alt="About Makaan" />
                    </div>
                </div>
            </div>

            {/* Search bar */}

            <div className='search-bar-bg'>
                <div className='container'>
                    <div className='search-bar-box'>
                        <div className='row g-2 align-item-center'>
                            <div className='col-md-3'>
                                <input className='form-control' placeholder='search' />
                            </div>
                            <div className='col-md-3'>
                                <select className='g1' placeholder='property type'>
                                    <option>Property type1</option>
                                    <option>Property type2</option>
                                    <option>Property type3</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <select className='g1' placeholder='location'>
                                    <option>location1</option>
                                    <option>location2</option>
                                    <option>location3</option>
                                </select>
                            </div>
                            <div className='col-md-3'>
                                <button className='btn btn-primary ' id='btn1'>search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='place to find'>
                <div className='place2'>
                    <img src={c1}></img>
                    <h1>#1 Place To Find The Perfect<br></br>
                        Property</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.<br></br>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                        <br></br>dolore erat amet</p>
                    <div className="place-feature">
                        <i class="fa-solid fa-check"></i>
                        <h4>Tempor erat elitr rebum at clita</h4>
                    </div>
                    <div className="place-feature">
                        <i class="fa-solid fa-check"></i>
                        <h4>Aliqu diam amet diam et eos</h4>
                    </div>
                    <div className="place-feature">
                        <i class="fa-solid fa-check"></i>
                        <h4>Clita duo justo magna dolore erat amet</h4>
                    </div>
                    <button type="button" class="btn btn-success" id="btn2">Read more</button>
                </div>
            </div>




               <div className='contact '>
                <div className='d3'>
                    <img src={d3} className='contact-img' />
                </div>
                <div className='contact-1'>
                    <h1>Contact With Our Certified<br></br> Agent</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
                        vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo</p>
                    <button type="button" class="btn btn-success m-3 p-3"><i class="fa-solid fa-headset"></i>MAKE A CALL</button>
                    <button type="button" class="btn btn-success m-3 p-3"><i class="fa-regular fa-calendar-days"></i>GET APPOINMENT</button>
                </div>
            </div>



              <footer className="footer">
                <div className="container">
                    <div className="row gy-5">

                        {/* Get In Touch */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="footer-title">Get In Touch</h5>
                            <p><i class="fa-solid fa-map-pin"></i> 123 Street, New York, USA</p>
                            <p> <i class="fa-solid fa-phone"></i>+012 345 67890</p>
                            <p> <i class="fa-solid fa-envelope"></i>info@example.com</p>

                            <div className="social-icons">
                                <a><i class="fa-brands fa-facebook"></i></a>
                                <a><i class="fa-brands fa-twitter"></i></a>
                                <a><i class="fa-brands fa-telegram"></i></a>
                                <a><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="footer-title">Quick Links</h5>
                            <ul className="footer-links">
                                <li><i class="fa-solid fa-play"></i>About Us</li>
                                <li><i class="fa-solid fa-play"></i>Contact Us</li>
                                <li><i class="fa-solid fa-play"></i>Our Services</li>
                                <li><i class="fa-solid fa-play"></i>Privacy Policy</li>
                                <li><i class="fa-solid fa-play"></i>Terms & Condition</li>
                            </ul>
                        </div>

                        {/* Photo Gallery */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="footer-title">Photo Gallery</h5>
                            <div className="gallery">
                                <img src={c6} alt="" />
                                <img src={c3} alt="" />
                                <img src={c4} alt="" />
                                <img src={c5} alt="" />
                                <img src={d1} alt="" />
                                <img src={d2} alt="" />
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-lg-3 col-md-6">
                            <h5 className="footer-title">Newsletter</h5>
                            <p>
                                Dolor amet sit justo amet elitr clita ipsum elitr est.
                            </p>

                            <div className="newsletter">
                                <input type="email" placeholder="Your email" />
                                <button>SignUp</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                        <div className="bottom-links">
                            <span>Home</span>
                            <span>Cookies</span>
                            <span>Help</span>
                            <span>FAQs</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default About;
