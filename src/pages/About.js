import v1 from './img/carousel-1.jpg';
// import b2 from './img/carousel-2.jpg';
import c1 from './img/about.jpg';


const About = () => {
    return (
        <>
            <div className="abt">
                <div className="abt-1">
                    <h1>About Us</h1>
                    <p>Home/page/About</p>
                </div>
            </div>


            <div className='abc'>
                <div className='abc-1'>
                    <img src={v1} />
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
                    <i class="fa-solid fa-check"></i>
                    <h4>Tempor erat elitr rebum at clita</h4><br></br>
                    <i class="fa-solid fa-check"></i>
                    <h4>Aliqu diam amet diam et eos</h4><br></br>
                    <i class="fa-solid fa-check"></i>
                    <h4>Clita duo justo magna dolore erat amet</h4><br></br>
                    <button type="button" class="btn btn-success" id="btn2">Read more</button>
                </div>
            </div>
        </>
    )
}
export default About;