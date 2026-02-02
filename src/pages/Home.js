import { Link } from 'react-router-dom';
import b1 from './img/carousel-1.jpg';
import b2 from './img/carousel-2.jpg';
import b3 from './img/icon-apartment.png';
import b4 from './img/icon-villa.png';
import b5 from './img/icon-house.png';
import b6 from './img/icon-condominium.png';
import b7 from './img/icon-luxury.png';
import c1 from './img/about.jpg';
import c2 from './img/property-2.jpg';
import c3 from './img/property-3.jpg';
import c4 from './img/property-4.jpg';
import c5 from './img/property-5.jpg';
import d1 from './img/property-6.jpg';
import d2 from './img/property-1.jpg';

import d3 from './img/call-to-action.jpg';



import y1 from './img/team-1.jpg';
import y2 from './img/team-2.jpg';
import y3 from './img/team-3.jpg';
import y4 from './img/team-4.jpg';


import u1 from './img/testimonial-1.jpg';
import u2 from './img/testimonial-2.jpg';
import u3 from './img/testimonial-3.jpg';


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


const Home = () => {
  return (
    <>
      <div className='c1'>
        <h1>Find A <span>Perfect Home To</span><br></br>
          Live With Your Family</h1>
        <p>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum<br></br>
          ipsum et diam justo clita et kasd rebum sea elitr.</p>
        <button type="button" class="btn btn-success">GET STATED</button>
        <img src={b1}></img>

        <div className='c2'>
          <img src={b2}></img>
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

      <div className='place to find'>
        <div className='place2'>
          <img src={c1}></img>
          <h1>#1 Place To Find The Perfect<br></br>
            Property</h1>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.<br></br>
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
            <br></br>dolore erat amet</p>
          <i class="fa-solid fa-check"></i>
          <h4>Tempor erat elitr rebum at clita</h4><br></br>
          <i class="fa-solid fa-check"></i>
          <h4>Aliqu diam amet diam et eos</h4><br></br>
          <i class="fa-solid fa-check"></i>
          <h4>Clita duo justo magna dolore erat amet</h4><br></br>
          <button type="button" class="btn btn-success" id="btn2">Read more</button>
        </div>
      </div>

      {/* Property Listing */}

      <div className='Property'>
        <div className='Property1'>
          <h1>Property Listing</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
            vero ipsum sit eirmod sit diam justo sed rebum.</p>
          <button type="button" class="btn btn-success" id="btn3">Featured</button>
          <button type="button" class="btn btn-success" id="btn4">For sale</button>
          <button type="button" class="btn btn-success" id="btn5">For Rent</button>
        </div>
      </div>


      {/* main card */}
      <div class="container py-5">
        <div class="row g-4">

          {/* <!-- Card 1 --> */}
          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={c2} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={c3} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={c4} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={c5} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={d2} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="property-card">
              <div class="img-box">
                <span class="badge sell">For Sell</span>
                <img src={d1} />
              </div>

              <div class="p-3">
                <span class="type">Apartment</span>
                <h4 class="price">$12,345</h4>
                <h5 class="title">Golden Urban House For Sell</h5>
                <p class="location">
                  <i class="fa-solid fa-location-dot"></i> 123 Street, New York, USA
                </p>

                <div class="details">
                  <span><i class="fa-solid fa-ruler-combined"></i> 1000 Sqft</span>
                  <span><i class="fa-solid fa-bed"></i> 3 Bed</span>
                  <span><i class="fa-solid fa-bath"></i> 2 Bath</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-success" id='bun'>Browser More Property</button>

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

      {/* Property Agents */}

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
      {/* Our Clients Say! */}


      {/* Testimonial */}
      <div className='container-our'>
        <h1>Our clients Say!</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd<br></br>
          vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div class="container py-5">
        <div class="testimonial-wrapper">

          {/* Testimonial 1 */}
          <div class="testimonial-box">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
              est kasd kasd erat eos
            </p>

            <div class="client-info">
              <img src={u1} alt=""></img>
              <div>
                <h4 class="client-name">Client Name</h4>
                <h4 class="client-role">Profession</h4>
              </div>
            </div>
          </div>

          {/*Testimonial 2 */}
          <div class="testimonial-box">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
              est kasd kasd erat eos
            </p>

            <div class="client-info">
              <img src={u2} alt=""></img>
              <div>
                <h4 class="client-name">Client Name</h4>
                <h4 class="client-role">Profession</h4>
              </div>
            </div>
          </div>
          <br></br>

          {/*Testimonial 3 */}
          <div class="testimonial-box mb-0">
            <p>
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet<br></br>
              est kasd kasd erat eos
            </p>

            <div class="client-info">
              <img src={u3} alt=""></img>
              <div>
                <h4 class="client-name">Client Name</h4>
                <h4 class="client-role">Profession</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

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
export default Home;