import c1 from './img/about.jpg';
import c2 from './img/property-2.jpg';
import c3 from './img/property-3.jpg';
import c4 from './img/property-4.jpg';
import c5 from './img/property-5.jpg';
import d1 from './img/property-6.jpg';
import d2 from './img/property-1.jpg';




import b3 from './img/icon-apartment.png';
import b4 from './img/icon-villa.png';
import b5 from './img/icon-house.png';
import b6 from './img/icon-condominium.png';
import b7 from './img/icon-luxury.png';


const propertyData = [
  { title: "Apartment", p: "123 Properties", img: b3 },
  { title: "Villa", p: "123 Properties", img: b4 },
  { title: "Home", p: "123 Properties", img: b5 },
  { title: "Office", p: "123 Properties", img: b6 },
  { title: "Building", p: "123 Properties", img: b7 },
  { title: "Townhouse", p: "123 Properties", img: b3 },
  { title: "Shop", p: "123 Properties", img: b4 },
  { title: "Garage", p: "123 Properties", img: b7 },
];

const Producttype = () => {
  return (
    <>
      <div className="property-types-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-3">Property Types</h2>
          <p className="text-center text-muted mb-5">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
            vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo
          </p>

          <div className="row g-4">
            {propertyData.map((item, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="property-card1 text-center">
                  <div className="icon-img">
                    <img src={item.img} />
                  </div>
                  <h6 className="mt-3">{item.title}</h6>
                  <p className="text-muted">{item.p}</p>
                </div>
              </div>
            ))}
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
export default Producttype;