import React from 'react';
import pic15 from '../assets/images/platinum1.jpg'

const BanPlati = (props) => (
    <section style={{backgroundImage:`url(${pic15})`}}  id="banner" className="major">
        <div className="inner">
            <header className="major">
            
                <h3 style={{fontFamily:'Cinzel Decorative'}} >Platinum shows your inner confidence and love!!</h3>
            </header>
            
            <div className="content">
                <p>Planning your most Platinum elegant touch stays</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Details</a></li>
                    <li><a href="#two" className="button next scrolly">Book Now</a></li>
                    <li><a href="#three" className="button next scrolly">Gallery</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default BanPlati
