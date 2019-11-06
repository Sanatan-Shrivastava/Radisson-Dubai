import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/radisson.png'
import pic12 from '../assets/images/dubai.png'

const Custom = (props) => (
    <GenLayout>
    <Helmet>
        <title></title>
        <meta name="description" content="Landing Page" />
    </Helmet>
    

    <section id="contact">
        <div className="inner">
       
            <section>
            <h3 style={{fontFamily:'Cinzel Decorative'}}>Plan your Stay the way you want to</h3>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Number of Guests</label>
                        <input style={{backgroundColor:'#fff'}} type="tel" name="guest" id="guest" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Number of Rooms</label>
                        <input style={{backgroundColor:'#fff'}} type="tel" name="room" id="room" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="email">Starting Date</label>
                        <input style={{backgroundColor:'#fff'}} type="tel" name="sdate" id="sdate" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Ending Date</label>
                        <input style={{backgroundColor:'#fff'}} type="tel" name="edate" id="edate" />
                    </div>
                    
                    <ul className="actions">
                        <a className="button">Add Choices -></a>
                    </ul>
                </form>
            </section>
            <section style={{backgroundColor:'#8c816b', padding:'0em 0 0em 0em', marginTop:'1.4em'}} className="split">
            <center><h5 style={{color:'#000'}}>Add on the facilities</h5></center>
                <section style={{backgroundColor:'#8c816b', padding:'0em 0 0em 0em'}}>
                    <div className="contact-method">
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="spa" name="spa" defaultChecked />
                                <label style={{color:'#000000'}} htmlFor="spa">Spa (2000 Rs/Day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="swimming" name="swimming" />
                                <label style={{color:'#000000'}} htmlFor="swimming">Swimming (Free)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="gym" name="gym" />
                                <label style={{color:'#000000'}} htmlFor="gym">GYM (Membership: INR 8000)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="pool" name="pool" />
                                <label style={{color:'#000000'}} htmlFor="pool">Pool (Card: INR 400/day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="racquetball" name="racquetball" />
                                <label style={{color:'#000000'}} htmlFor="racquetball">Racquetball (INR 500/day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="casino" name="casino" />
                                <label style={{color:'#000000'}} htmlFor="casino">Casino (INR 4000/day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="golf" name="golf" />
                                <label style={{color:'#000000'}} htmlFor="golf">Golf (INR 3500/3days)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="shooting" name="shooting" />
                                <label style={{color:'#000000'}} htmlFor="shooting">Shooting (INR 2000/day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="bar" name="bar" />
                                <label htmlFor="bar">Bar (Open Bar)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="bhurj" name="bhurj" />
                                <label style={{color:'#000000'}} htmlFor="bhurj">Trip to Burj Khalifa (INR 10000/day)</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <input type="checkbox" id="demo-copy9" name="demo-copy1" />
                                <label style={{color:'#000000'}} htmlFor="demo-copy9">Golf (INR 3500/3days)</label>
                            </div>
                        </div>
                       
                        <div className="field half first">
                        <label htmlFor="name">Total</label>
                        <input style={{backgroundColor:'#000000'}} style={{backgroundColor:'#fff', width: "90%"}} type="tel" name="guest" id="guest" />
                    </div>
                    </div>
                </section>
            </section>
        </div>
    </section>
</GenLayout>
)


export default Custom