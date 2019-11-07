import React from 'react';
import pic14 from '../assets/images/silver1.jpg'

const BanSilver = (props) => (
    <section style={{backgroundImage:`url(${pic14})`}}  id="banner" className="major">
        <div className="inner">
            <header className="major">
            
                <h3 style={{fontFamily:'Cinzel Decorative'}} >They say, Silver is a signatue of Novelty!</h3>
            </header>
            
            <div className="content">
                <p>Planning your most Silvery touch stays</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Details</a></li>
                    <li><a href="#two" className="button next scrolly">Book Now</a></li>
                    <li><a href="#three" className="button next scrolly">Gallery</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BanSilver
