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

const Login = (props) => (
    <GenLayout>
    <Helmet>
        <title></title>
        <meta name="description" content="Landing Page" />
    </Helmet>
    

    <div id="main">
        <section style={{backgroundColor:'black'}}  id="one">
            <div className="inner">
            <h1 style={{fontFamily:'Cinzel Decorative'}}>About Us</h1>
                <header className="major">
                    <h2 style={{fontFamily:'Cinzel Decorative'}}>Serving luxurious legacy since 1975!</h2>
                </header>
                <p style={{fontFamily:'ZCOOL+XiaoWei'}}>Radisson Dubai Hotels and Resorts is a well-established luxury hotel company, which has had a distinct impact on the global hospitality market for the past two decades.</p>
            </div>
        </section>
        <section id="two" className="spotlights">
            <section  style={{backgroundColor:'black'}}>
                <Link to="/generic" className="image">
                    <img src={pic08} alt="" />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3 style={{fontFamily:'Cinzel Decorative'}}>Vibrant and Jubilant</h3>
                        </header>
                        <p>Radisson Hotels and Resorts is a well-established luxury hotel company, which has had a distinct impact on the global hospitality market for the past two decades. Radisson has transformed the way that luxury is defined as exemplified by its flagship Resorts, The Grand Radisson Dubai.</p>
                        
                    </div>
                </div>
            </section>
            <section  style={{backgroundColor:'black'}}>
                <Link to="/generic" className="image">
                    <img src={pic10} alt="" />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3 style={{fontFamily:'Cinzel Decorative'}}>Dining – elevating the experience</h3>
                        </header>
                        <p>RD's strategic positioning puts Food & Beverage as a core pillar of the brand and its strongest differentiator. No other hotel in Dubai can compete with Jumeirah for properties or our rich dining experiences and new restaurant concepts will be central to our international development strategy. With the recent appointment of renowned epicure, Micheal Ellis as Chief Culinary Officer, RD's will drive creativity and reinvigorate its dining concepts and gastronomic experiences across its portfolio.</p>
                       
                    </div>
                </div>
            </section>
            <section  style={{backgroundColor:'black'}}>
                <Link to="/generic" className="image">
                    <img src={pic09} alt="" />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3 style={{fontFamily:'Cinzel Decorative'}}>Service – beyond expectations</h3>
                        </header>
                        <p>Placing the guest at the centre of all we do is a top priority. A current focus is to elevate the already very high standards of excellence, which is at the heart of Jumeirah. We are committed to continuous improvement and to ensuring that the Radisson Dubai name is synonymous with great service, high quality and exhilarating experiences. With a renewed determination to lead luxury hospitality, RD has recommitted to deliver personalized guest experiences offering service beyond expectations.</p>
                       
                    </div>
                </div>
            </section>
            <section style={{backgroundColor:'black'}}>
                <Link to="/generic" className="image">
                    <img src={pic10} alt="" />
                </Link>
                <div className="content">
                    <div className="inner">
                        <header className="major">
                            <h3 style={{fontFamily:'Cinzel Decorative'}}>Product, Architecture and Design – Redefined</h3>
                        </header>
                        <p>R. Dubai serves understated luxury within exquisite spaces that makes a stay truly memorable. Our hotels set new standards within the industry and are creating ideal environments to stir emotion, whether you are in a restaurant, spa, guest room or lobby – wherever you are in a RD hotel you will enjoy harmonious spaces, signature landscapes, and iconic architecture like the RD' Dubai. For every guest, travel is enhanced by both our warm hospitality and the atmosphere and sense of place that being in a RD resort evokes.

                        </p>
                        
                    </div>
                </div>
            </section>
        </section>
    </div>
</GenLayout>
)


export default Login