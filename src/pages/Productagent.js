
import './index.css';

import y1 from './img/team-1.jpg';
import y2 from './img/team-2.jpg';
import y3 from './img/team-3.jpg';
import y4 from './img/team-4.jpg';



import c2 from './img/property-2.jpg';
import c3 from './img/property-3.jpg';
import c4 from './img/property-4.jpg';
import c5 from './img/property-5.jpg';
import d1 from './img/property-6.jpg';
import d2 from './img/property-1.jpg';


const Productagent = () => {
    return (
        <>
            <div className='ag-1 text-center'>
                <div className='ag-2'>
                    <h1 className='fw-bold'>Property Agents</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br>
                    </br> vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
            </div>
            <div class="container py-5">
                <div class="row g-4">

                    {/* Card 1 */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card team-card">
                            <img src={y1} class="team-img"></img>
                            <div class="agent-social">
                                <a><i class="fa-brands fa-facebook"></i></a>
                                <a><i class="fa-brands fa-twitter"></i></a>
                                <a><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div class="card-body team-body">
                                <h5 class="team-name">Full Name</h5>
                                <p class="team-role">Designation</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card team-card">
                            <img src={y2} class="team-img"></img>
                            <div class="agent-social">
                                <a><i class="fa-brands fa-facebook"></i></a>
                                <a><i class="fa-brands fa-twitter"></i></a>
                                <a><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div class="card-body team-body">
                                <h5 class="team-name">Full Name</h5>
                                <p class="team-role">Designation</p>
                            </div>
                        </div>
                    </div>

                    {/*Card 3 */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card team-card">
                            <img src={y3} class="team-img"></img>
                            <div class="agent-social">
                                <a><i class="fa-brands fa-facebook"></i></a>
                                <a><i class="fa-brands fa-twitter"></i></a>
                                <a><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div class="card-body team-body">
                                <h5 class="team-name">Full Name</h5>
                                <p class="team-role">Designation</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4  */}
                    <div class="col-lg-3 col-md-6">
                        <div class="card team-card">
                            <img src={y4} class="team-img"></img>
                            <div class="agent-social">
                                <a><i class="fa-brands fa-facebook"></i></a>
                                <a><i class="fa-brands fa-twitter"></i></a>
                                <a><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div class="card-body team-body">
                                <h5 class="team-name">Full Name</h5>
                                <p class="team-role">Designation</p>
                            </div>
                        </div>
                    </div>
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
                                <img src={c2} alt="" />
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
export default Productagent;