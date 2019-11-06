import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import GenLayout from '../components/genlayout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/diamond.jpg'
import pic02 from '../assets/images/platinum.png'
import pic03 from '../assets/images/silver.jpg'
import pic04 from '../assets/images/gold.jpg'
import pic05 from '../assets/images/background.png'
import pic14 from '../assets/images/pic04.jpg'
import pic07 from '../assets/images/pic07.jpg'
class HomeIndex extends React.Component {
    render() {

        return (
            <GenLayout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>DIAMOND</h3>
                                <p>Feel like a king, when you own the world of Dubai with our most premium Diamond Pack.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>PLATINUM</h3>
                                <p>If not a king, then be the advisor. Live almost like a king, with our next on the range, Platinum Pack.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>SILVER</h3>
                                <p>Enable yourself to live the most of the Dubai with keeping your budget within your limits.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>GOLD</h3>
                                <p>Best mediocre price ranges, with best amenities in Dubai only with GOLD package by Radisson Dubai.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        
                    </section>
                    <section style={{height:'110vh'}} id="two">
                        <div className="inner">
                            <header style={{marginTop:'10em'}} className="major">
                                <h2>ATTENTION TO DETAIL</h2>
                            </header>
                            <p>A hotel that’s home to cutting-edge engineering,<br></br> from the unique man-made beach and infinity pool terrace, <br></br> to the world’s tallest atrium</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section style={{height:'110vh',backgroundColor:'transparent', background:`url("https://player.vimeo.com/video/342658137?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=true&dnt=true&background=1")`}} id="two">
                        <div className="inner">
                            <header style={{marginTop:'10em'}} className="major">
                                <h2></h2>
                            </header>
                            <p>A hotel that’s home to cutting-edge engineering,<br></br> from the unique man-made beach and infinity pool terrace, <br></br> to the world’s tallest atrium</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </GenLayout>
        )
    }
}

export default HomeIndex