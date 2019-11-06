import React from 'react';
import pic13 from '../assets/images/gold1.jpg'

const BanGold = (props) => (
    <section style={{backgroundImage:`url(${pic13})`}}  id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h3 style={{fontFamily:'Cinzel Decorative'}} >With Gold, get the Golden Dreams along with a lots of Savings!</h3>
            </header>
            <div className="content">
                <p>Planning your most Vibrant and golden stays</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Details</a></li>
                    <li><a href="#two" className="button next scrolly">Book Now</a></li>
                    <li><a href="#three" className="button next scrolly">Gallery</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BanGold
