import './index.css';

import h1 from './img/carousel-1.jpg';

import c2 from './img/property-2.jpg';
import c3 from './img/property-3.jpg';
import c4 from './img/property-4.jpg';
import c5 from './img/property-5.jpg';
import d1 from './img/property-6.jpg';
import d2 from './img/property-1.jpg';

const Productlist = () => {
    return (
        <>
            <div className="rty">
                <div className="rty-1">
                    <h1>Property List</h1>
                    <p>Home / Pages / Property List</p>
                </div>
            </div>

            <div className="ptl">
                <div className="ptl-1">
                    <img src={h1} alt="banner" />
                </div>
            </div>

            <div className="search-bar-bg">
                <div className="container">
                    <div className="search-bar-box">
                        <div className="row g-2 align-items-center">
                            <div className="col-md-3">
                                <input
                                    className="form-control"
                                    placeholder="Search"
                                />
                            </div>

                            <div className="col-md-3">
                                <select className="g1">
                                    <option value="">Property Type</option>
                                    <option>Property type1</option>
                                    <option>Property type2</option>
                                    <option>Property type3</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <select className="g1">
                                    <option value="">Location</option>
                                    <option>Location1</option>
                                    <option>Location2</option>
                                    <option>Location3</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-primary" id="btn1">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Property">
                <h1>Property Listing</h1>
                <p>
                    Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
                    <br />
                    vero ipsum sit eirmod sit diam justo sed rebum.
                </p>

                <button className="btn btn-success" id="btn3">Featured</button>
                <button className="btn btn-success" id="btn4">For Sale</button>
                <button className="btn btn-success" id="btn5">For Rent</button>
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
        </>
    )
}

export default Productlist;